import { Formik } from "formik";
import React from "react";
import { collegeRegistration } from "./CollegeRegisterValidation";

import Typography from "@mui/material/Typography";
import {
  FormControl,
  TextField,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
const CollegeRegistration = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          gender: "",
          email: "",
          listOfClasses: "",
        }}
        validationSchema={collegeRegistration}
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
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <Typography variant="h3">Registration Form</Typography>
              <Typography variant="subtitle1">
                Fill out the form carefully for registration
              </Typography>
              <div style={{ paddingRight: "260px" }}>
                <Typography variant="subtitle2">Student Name</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
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
                    label="Last Name"
                    {...formik.getFieldProps("lastName")}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <FormHelperText error>
                      {formik.errors.lastName}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </div>
              <div style={{ paddingRight: "300px" }}>
                <Typography variant="subtitle2" style={{ color: "black" }}>
                  Gender
                </Typography>
              </div>
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
              <div style={{ paddingRight: "260px" }}>
                <Typography variant="subtitle2">Student E-mail</Typography>
              </div>
              <FormControl>
                <TextField label="Email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              <div style={{ paddingRight: "260px" }}>
                <Typography variant="subtitle2">List Of Courses</Typography>
              </div>
              <FormControl>
                <InputLabel>Classes </InputLabel>
                <Select
                  {...formik.getFieldProps("listOfClasses")}
                  label="List of Classes"
                >
                  <MenuItem value="IT-section-A">IT-section_A</MenuItem>
                  <MenuItem value="IT-section-B">IT-section_B</MenuItem>
                  <MenuItem value="Computer-section-A">
                    Computer-section_A
                  </MenuItem>
                  <MenuItem value="Computer-section-B">
                    Computer-section_B
                  </MenuItem>
                  <MenuItem value="Civil-section-A">Civil-section_A</MenuItem>
                  <MenuItem value="Civil-section-B">Civil-section_B</MenuItem>
                </Select>

                {formik.touched.gender && formik.errors.gender ? (
                  <FormHelperText error>{formik.errors.gender}</FormHelperText>
                ) : null}
              </FormControl>

              <Button
                type="submit"
                color="secondary"
                variant="contained"
                style={{ backgroundColor: "green" }}
              >
                Submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CollegeRegistration;
