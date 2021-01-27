import * as yup from "yup";

export const yupSchema = {
  //TODO: Mod. phone REGEXP
  //TODO: Add birthDate validation
  brand: yup
    .string()
    .matches(/^(^[A-Za-z ]*)$/, "Formato inválido")
    .required("Introduce la marca"),
  model: yup
    .number()
    .typeError("Debes introducir un año")
    .min(1900, "El modelo debe ser superior al año 1900")
    .required("Introduce el modelo del vehículo"),
  line: yup
    .string()
    .matches(/^(^[A-Za-z0-9 ]*)$/, "Formato inválido")
    .required("Introduce una referencia para la búsqueda"),
};
