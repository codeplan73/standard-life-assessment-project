import * as yup from "yup";

export const schema = yup
  .object()
  .shape({
    full_name: yup.string().required("Fullname is required").min(3),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    password: yup
      .string()
      .required("Password is required")
      .matches(/^(?=.*[a-z])/, "One lowercase character")
      .matches(/^(?=.*[A-Z])/, "One uppercase character")
      .matches(/^(?=.*[0-9])/, "One number")
      .matches(/^(?=.*[!@#$%^&*])/, "One special character")
      .min(8, "Minimum 8 characters"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  })
  .required();

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const createPostSchema = yup.object({
  title: yup.string().required("Title is required").min(3),
  description: yup.string().required("Description is required").min(10),
  // img_url: yup.string().required("Image is required"),
  content: yup.string().required("Content is required"),
});
