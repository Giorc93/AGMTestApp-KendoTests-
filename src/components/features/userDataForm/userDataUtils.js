import * as yup from "yup";

export const yupSchema = {
  //TODO: Mod. phone REGEXP
  //TODO: Add birthDate validation
  firstName: yup
    .string()
    .matches(/^(^[A-Za-z ]*)$/, "Formato inválido")
    .required("Introduce tu nombre"),
  lastName: yup
    .string()
    .matches(/^(^[A-Za-z ]*)$/, "Formato inválido")
    .required("Introduce tu apellido"),
  email: yup
    .string()
    .email("Introduce una dirección de correo válida")
    .required("Introduce tu dirección de correo"),
  phoneNumber: yup
    .string()
    .matches(/^(^[0-9]*)$/, "Formato inválido")
    .min(10, "Formato inválido")
    .max(10, "Formato inválido")
    .required("Introduce tu número de teléfono"),
  placeData: yup.string().required("Introduce la ciudad"),
};
