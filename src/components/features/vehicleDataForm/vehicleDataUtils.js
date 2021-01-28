import * as yup from "yup";

export const yupSchema = {
  //TODO: Mod. phone REGEXP
  //TODO: Add birthDate validation
  plateType: yup.string().required("Selecciona el tipo de placa"),
  useType: yup.string().required("Selecciona el uso del vehiculo"),
  accesoriesPrice: yup
    .number()
    .typeError("Introduce el precio de los accesorios. De no tener ingresa 0")
    .min(0, "Valor inválido")
    .required("Introduce el precio de los accesorios. De no tener ingresa 0"),
  protectionType: yup.string().required("Selecciona el tipo de alarma"),
  placeData: yup.string().required("Introduce la ciudad"),
};
