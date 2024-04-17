import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import {
  TextField,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
  Select,
  MenuItem,
} from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { IconButton, InputAdornment } from "@mui/material";
// import { useState } from "react";
// import DisplayPasswordInput from "./DisplayPasswordInput";

const EcRegister = () => {
  //   const PasswordInput = ({ password, handlePassword }) => {
  //     const [showPassword, setShowPassword] = useState(false);

  //     const handleClickShowPassword = () => {
  //       setShowPassword(!showPassword);
  //     };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          confirmPassword: "",
          gender: "",
          location: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("Email is required")
            .trim()
            .max(60, "Email must be at max 60")
            .min(8, "Email must not be less than 8 character")
            .lowercase(),

          firstName: Yup.string()
            .required("First name is required")
            .trim()
            .max(60, "First name  must be at max 20")
            .min(3, "First must not be less than 3 character"),

          lastName: Yup.string()
            .required("Last name is required")
            .trim()
            .max(20, "Last name  must be at max 20")
            .min(3, "Last must not be less than 3 character"),

          password: Yup.string()
            .required("First name is required")
            .trim()
            .max(25, "Password name  must be at max 25")
            .min(5, "Password must not be less than 5 character"),

          gender: Yup.string()
            .oneOf(["male", "female", "preferNotToSay"])
            .required("Gender is required."),

          confirmPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Password must match"
          ),

          location: Yup.string()
            .required("location  is required")
            .trim()
            .max(20, "Location must be at max 50")
            .min(3, "Location must be at least 3 character"),
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
              <Typography variant="h3">Registration</Typography>
              <FormControl>
                <TextField label="Email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <TextField
                  label="First Name"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <FormHelperText error>
                    {formik.errors.firstName}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <TextField
                  label="lastName"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <FormHelperText error>
                    {formik.errors.lastName}
                  </FormHelperText>
                ) : null}
              </FormControl>
              {/* <FormControl>
                  <TextField
                    size="small"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={handlePassword}
                    required={true}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <FormHelperText error>
                      {formik.errors.password}
                    </FormHelperText>
                  ) : null}
                </FormControl> */}
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
              <FormControl>
                <TextField
                  label="Confirm password"
                  {...formik.getFieldProps("confirmPassword")}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <FormHelperText error>
                    {formik.errors.confirmPassword}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <InputLabel>Gender</InputLabel>
                <Select {...formik.getFieldProps("gender")} label="Gender">
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="preferNotToSay">Other</MenuItem>
                </Select>

                {formik.touched.gender && formik.errors.gender ? (
                  <FormHelperText error>{formik.errors.gender}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <TextField
                  label="location"
                  {...formik.getFieldProps("location")}
                />
                {formik.touched.location && formik.errors.location ? (
                  <FormHelperText error>
                    {formik.errors.location}
                  </FormHelperText>
                ) : null}
              </FormControl>
              {console.log(formik.errors)}
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                style={{ backgroundColor: "green" }}
              >
                Sign up
              </Button>
              <a href="">Already registered? Login</a>;
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EcRegister;
