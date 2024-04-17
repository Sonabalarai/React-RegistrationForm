import * as Yup from "yup";
export const collegeRegistration = Yup.object({
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

  email: Yup.string()
    .required("Email is required")
    .trim()
    .max(60, "Email can be at max 60")
    .min(6, "Email must not be less than 6 character")
    .lowercase(),

  gender: Yup.string()
    .oneOf(["male", "female", "preferNot To Say"])
    .required("Gender is required"),

  listOfClasses: Yup.string().oneOf([
    "IT-section-A",
    "IT-section-B",
    "Computer-section-A",
    "Computer-section-B",
    "Civil-section-A",
    "Civil-section-B",
  ]),
});
