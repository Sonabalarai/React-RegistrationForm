import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import { TextField, FormControl, Button, FormHelperText } from "@mui/material";

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          confirmPassword: "",
          location: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("Email is required")
            .trim()
            .max(60, "Email must be at max 60")
            .min(8, "Email must not be less than 8 character")
            .lowercase(),

          password: Yup.string()
            .required("First name is required")
            .trim()
            .max(25, "Password name  must be at max 25")
            .min(5, "Password must not be less than 5 character"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                width: "400px",
                gap: "1rem",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
            >
              <Typography variant="h3">Login</Typography>

              <FormControl>
                <TextField label="email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <Button
                type="submit"
                color="secondary"
                variant="contained"
                style={{ backgroundColor: "green" }}
              >
                Sign up
              </Button>
              <a href="EcRegister.jsx">New here?Register</a>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
