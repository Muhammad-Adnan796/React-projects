import * as Yup from "yup";

export const formSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too Short")
    .max(25, "Too Long")
    .required("Name field can't empty"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email field can't empty"),
  age: Yup.number().min(10).max(50).required("Age can't empty"),
  password: Yup.string()
    .required("Password field can't empty")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Enter strong password"
    ),
  confirmPassword: Yup.string()
    .required("Confirm password field can't empty")
    .oneOf([Yup.ref("password"), null], "Both passwords must be same"),
});
