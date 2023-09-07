import * as Yup from "yup";

export const formSchema = Yup.object({
  name:Yup.string().min(3).required("Name field can't be empty"),
  email:Yup.string().required("Email field can't be empty").email("Invalid Email"),
  subject:Yup.string().min(3).required("Subject field can't be empty"),
  message:Yup.string().min(5).required("Message field can't be empty")
});
