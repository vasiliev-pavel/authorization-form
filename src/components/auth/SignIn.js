import React from "react";
import { useFormik } from "formik";
import { signInRequest } from "../../redux/auth/actions/signInActions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faVk } from "@fortawesome/free-brands-svg-icons";
import * as Yup from "yup";
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInGoogleRequest } from "../../redux/auth/actions/signInGoogleAct";
import {
  FormGroup,
  Form,
  FormFeedback,
  Input,

} from "reactstrap";

const SignIn = () => {

  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const fromPage = location.state?.from?.pathname || "/";

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password length should be at least 8 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(signInRequest(values, () => navigate(fromPage)));
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
          <h2 className={"mt-4 pb-4 fw-bold"}>Sign In</h2>
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
          </FormGroup>
          <div className="form-options">
            <Link to="/forgotPassword">Forgot Password?</Link>
          </div>
          <button className={"btn btn-primary col-12 mt-3"} type={"submit"}>
            Sign In
          </button>
        </Form>{" "}
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
        <div className="sign-up-link">
          <p className={"text-wrap"}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
