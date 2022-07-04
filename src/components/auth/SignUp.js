import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Yup from "yup";
import { faGoogle, faVk } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { signUpRequest } from "../../redux/auth/actions/signUpActions";
import { signInGoogleRequest } from "../../redux/auth/actions/signInGoogleAct";
import "./style.css";
import { Form, FormFeedback, FormGroup, Input } from "reactstrap";

const SignUp = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .matches(/(?=.*\d)/, "The password should contain numbers")
      .matches(/(?=.*[a-z])/, "The password should contain lowercase letters")
      .matches(/(?=.*[A-Z])/, "The password should contain uppercase letters")
      .min(8, "Password length should be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values) => {
      dispatch(signUpRequest(values, () => navigate("/")));
    },
    validationSchema,
  });

  return (
    <div
      className={
        "form-container position-absolute top-50 start-50 translate-middle"
      }
    >
      <div className={"form-wrap"}>
        <Form onSubmit={formik.handleSubmit}>
          <h2 className={"mt-4 pb-4 fw-bold"}>Sign Up</h2>
          <FormGroup className={"form-group mb-4"}>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={"Email"}
              value={formik.values.email}
              onChange={formik.handleChange}
              invalid={!!(formik.touched.email && formik.errors.email)}
            />
            <FormFeedback className={"err-log mt-0"}>
              {formik.errors.email}
            </FormFeedback>
          </FormGroup>
          <FormGroup className={"form-group mb-4 "}>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder={"Password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              invalid={!!(formik.touched.password && formik.errors.password)}
            />
            <FormFeedback className={"err-log mt-0"}>
              {formik.errors.password}
            </FormFeedback>
          </FormGroup>{" "}
          <FormGroup className={"form-group mb-4 "}>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder={"Confirm Password"}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              invalid={
                !!(
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                )
              }
            />
            <FormFeedback className={"err-log mt-0"}>
              {formik.errors.confirmPassword}
            </FormFeedback>
          </FormGroup>
          <button className={"btn btn-primary col-12 mt-1"} type={"submit"}>
            Sign Up
          </button>
        </Form>
        <p className={"line-or mt-3"}>
          <span>or</span>
        </p>
        <div className="social-media my-3">
          <button
            onClick={() => {
              dispatch(signInGoogleRequest(() => navigate("/")));
            }}
          >
            <FontAwesomeIcon icon={faGoogle} className="fa fa-google" />
          </button>
          <button>
            <FontAwesomeIcon icon={faVk} className="fa" />
          </button>
        </div>
        <div className="sign-up-link ">
          <p className={"text-wrap"}>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
