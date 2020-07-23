import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Name must contain 3 or more characters.")
      .required("Name is required."),
    email: yup
      .string()
      .email("You must provide a valid email address.")
      .required("A valid Eamil is required."),
    password: yup
      .string()
      .min(6, "Password must contain 6 or more characters.")
      .required("A password is required."),
    tos: yup
      .string()
      .matches('true')
      .required("You must agree to our ToS")
});

export default formSchema;