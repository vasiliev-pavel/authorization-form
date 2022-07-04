import React from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { sendEmailRequest } from "../../redux/auth/actions/forgorPasswordAct";
import { useDispatch } from "react-redux";
import {

  Form,
  FormFeedback,
  FormGroup,
  Input,

} from "reactstrap";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      dispatch(sendEmailRequest(values.email, () => navigate("/login")));
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
  });

  return (
    <div
      className={
        "form-container position-absolute top-50 start-50 translate-middle"
      }
    >
      <div className={"form-wrap"}>
        <Form onSubmit={formik.handleSubmit}>
          <h3 className={"mt-4 pb-4 fw-bold"}>Forgot Password?</h3>
          <p className={"text-wrap text-center"}>
            Enter your email address and we will send a link to reset your
            password.
          </p>
          <FormGroup className={"form-group mb-3"}>
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
          </FormGroup>{" "}
          <button className={"btn btn-primary col-12 mt-2"} type={"submit"}>
            Send Reset Link
          </button>
        </Form>
        <div className="auth-link">
          <Link to="/login" className={"text-start mt-3"}>
            Sign In
          </Link>
          <Link to="/signup" className={"text-end mt-3"}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
