import * as yup from "yup";

export const yupSchema = {
  idType: yup
    .string()
    .matches(/^(^[A-Za-z ]*)$/, "Formato inválido")
    .required("Introduce tu nombre"),
  idNumber: yup.string().when("idType", {
    is: "NIT",
    then: yup
      .string()
      .matches(/^(^[0-9]*-[0-9])$/, "NIT inválido (i.e: xxxx-x)")
      .required("Introduce el NIT"),
    otherwise: yup
      .string()
      .matches(/^(^[0-9]*)$/, "Número de documento inválido")
      .required("Introduce el número de documento"),
  }),
};
