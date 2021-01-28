import React from "react";
//TODO: Check validations
import { Grid, Typography, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { saveDocumentData } from "../userDataForm/userDataSlice";
import { idTypeArr } from "../../utils/inputArrays";

import MainContainer from "../../material/MainContainer";
import SelectInput from "../../material/SelectInput";
import SubHeader from "../../material/SubHeader";
import Input from "../../material/Input";
import Form from "../../material/Form";

const DocumentDataFormComponent = () => {
  const { register, watch, handleSubmit, errors, control } = useForm();

  const watchIdType = watch("idType", "CC");

  const helperText = (type) => {
    switch (type) {
      case "required":
        return "Campo requerido";
      case "pattern":
        return "Formato inválido";
      default:
        return null;
    }
  };

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(saveDocumentData(data));
  };

  return (
    <MainContainer>
      <SubHeader>Información Personal</SubHeader>
      <Typography variant="subtitle1">
        Por favor, indicanos tus datos
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <SelectInput
              options={idTypeArr}
              name="idType"
              control={control}
              ref={register({ pattern: /^(^[A-Za-z]*)$/, required: true })}
              defaultValue={"CC"}
              label="Tipo de Documento"
              error={!!errors.idType}
              helperText={
                errors.idType &&
                errors.idType.type === "required" &&
                "Selecciona el tipo de documento"
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {watchIdType === "NIT" && (
              <Input
                type="text"
                fullWidth
                label="Número de NIT"
                name="nitNumber"
                control={control}
                ref={register({ pattern: /^(^[0-9]*-[0-9])$/, required: true })}
                error={!!errors.nitNumber}
                helperText={
                  errors.nitNumber && helperText(errors.nitNumber.type)
                }
              />
            )}
            {watchIdType !== "NIT" && (
              <Input
                type="text"
                fullWidth
                label="Número de Documento"
                name="idNumber"
                control={control}
                ref={register({ pattern: /^(^[0-9]*)$/, required: true })}
                error={!!errors.idNumber}
                helperText={errors.idNumber && helperText(errors.idNumber.type)}
              />
            )}
          </Grid>
          <Grid container item xs={12} justify="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Continuar
            </Button>
          </Grid>
        </Grid>
      </Form>
    </MainContainer>
  );
};

export default withRouter(DocumentDataFormComponent);
