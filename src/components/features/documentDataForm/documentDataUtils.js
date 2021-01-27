import * as yup from "yup";

export const yupSchema = {
  //TODO: Mod. phone REGEXP
  //TODO: Add birthDate validation
  idType: yup
    .string()
    .matches(/^(^[A-Za-z]*)$/, "Formato inválido")
    .required("Selecciona el tipo de documento"),
  nitNumber: yup
    .string()
    .matches(/^(^[0-9]*-[0-9])$/, "Formato inválido (xxxxxx-x)")
    .required("Introduce el NIT"),
  idNumber: yup
    .string()
    .matches(/^(^[0-9]*)$/, "Formato inválido")
    .required("Introduce el número de documento"),
};
