import * as yup from "yup";

export const loginValidationSchema = yup.object({
  username: yup
    .string()
    .required("username is required")
    .min(2, "username min is 2")
    .max(255),
  password: yup
    .string()
    .required("password is required")
    .min(4, "password min is 4")
    .max(255),
});
