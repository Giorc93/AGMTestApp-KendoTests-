const textRegex = new RegExp(/^[a-z-A-Z ]+/);
const numRegex = new RegExp(/^[0-9]+$/);
const nitRegex = new RegExp(/^[0-9]+-[0-9]$/);
const plateRegex = new RegExp(/[a-z-A-Z]{3}[0-9]{2}[a-z-A-Z-0-9]{1}$/);

export const plateValidator = (value) =>
  !value
    ? "Campo obligatorio"
    : plateRegex.test(value)
    ? ""
    : "Formato de placa inválido";

export const numericValidator = (value) =>
  !value
    ? "Campo obligatorio"
    : numRegex.test(value)
    ? ""
    : "Sólo números permitidos";

export const nitValidator = (value) =>
  !value
    ? "Campo obligatorio"
    : nitRegex.test(value)
    ? ""
    : "Formato NIT inválido";

export const idTypeValidator = (value) => (!value ? "Campo obliatorio" : "");
