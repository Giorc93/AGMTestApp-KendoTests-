import React from "react";

import { Grid, Typography, Button } from "@material-ui/core";
import { withRouter, useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { saveDocumentData } from "./documentDataSlice";
import { idTypeArr } from "../../utils/inputArrays";
import { yupSchema } from "./documentDataUtils";

import MainContainer from "../../material/MainContainer";
import SelectInput from "../../material/SelectInput";
import SubHeader from "../../material/SubHeader";
import Input from "../../material/Input";
import Form from "../../material/Form";

const schema = yup.object().shape(yupSchema);

const DocumentDataFormComponent = () => {
  const history = useHistory();

  const { register, watch, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const watchIdType = watch("idType", "CC");

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(saveDocumentData(data));
    history.push("/userDataForm");
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
              ref={register}
              defaultValue={"CC"}
              label="Tipo de Documento"
              error={!!errors.idType}
              helperText={errors?.idType?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              type="text"
              fullWidth
              label={
                watchIdType === "NIT" ? "Número NIT" : "Número de documento"
              }
              name="idNumber"
              control={control}
              ref={register}
              error={!!errors.idNumber}
              helperText={errors?.idNumber?.message}
            />
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
