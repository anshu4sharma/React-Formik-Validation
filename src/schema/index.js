import * as yup from "yup";
export const FormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter you name")
    .min(4, "Name must be at least 4 characters"),
  email: yup.string().email().required("Please enter you email"),
  password: yup.string().required("Please enter you password").min(5),
  confirm_password: yup
    .string()
    .required("Please enter you password")
    .oneOf([yup.ref("password"), null], "Password must match"),
});
