import React from "react";
//TODO: Check forwardRef
import { Grid, Typography, Button } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";

import { saveUserData } from "../userDataForm/userDataSlice";
import { idTypeArr } from "../../utils/inputArrays";
import { yupSchema } from "./documentDataUtils";

import MainContainer from "../../material/MainContainer";
import SelectInput from "../../material/SelectInput";
import SubHeader from "../../material/SubHeader";
import Input from "../../material/Input";
import Form from "../../material/Form";

const schema = yup.object().shape(yupSchema);

const DocumentDataFormComponent = () => {
  const { register, watch, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const watchIdType = watch("idType", "CC");

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("sss");
    dispatch(saveUserData(data));
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
              label="Tipo de Documento"
              error={!!errors.idType}
              helperText={errors?.idType?.message}
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
                ref={register}
                error={!!errors.nitNumber}
                helperText={errors?.nitNumber?.message}
              />
            )}
            {watchIdType !== "NIT" && (
              <Input
                type="text"
                fullWidth
                label="Número de Documento"
                name="idNumber"
                control={control}
                ref={register}
                error={!!errors.idNumber}
                helperText={errors?.idNumber?.message}
              />
            )}
          </Grid>
          <Grid container item xs={12} justify="center">
            <Button
              type="submit"
              //TODO: Set disabled as true by default
              disabled={Object.keys(errors).length === 0 ? false : true}
              variant="contained"
              color="primary"
              size="large"
            >
              Consultar
            </Button>
          </Grid>
        </Grid>
      </Form>
    </MainContainer>
  );
};

export default withRouter(DocumentDataFormComponent);
