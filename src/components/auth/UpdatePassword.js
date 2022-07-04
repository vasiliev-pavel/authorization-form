import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { updatePasswordRequest } from "../../redux/auth/actions/updatePasswordAct";
import { FormGroup, Form, FormFeedback, Input } from "reactstrap";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  let oobCode = searchParams.get("oobCode");

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      dispatch(
        updatePasswordRequest(values.password, oobCode, () =>
          navigate("/login")
        )
      );
    },
    validationSchema: Yup.object().shape({
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
          <h3 className={"mt-4 pb-4 fw-bold"}>Update Password</h3>
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
            Update Password
          </button>
        </Form>
      </div>
    </div>
  );
};

export default UpdatePassword;
