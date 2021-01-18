import React, { useEffect } from "react";

import { Grid, Typography, Button } from "@material-ui/core";
import { withRouter, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  getPlaceListByString,
  selectPlaceResponse,
} from "../getPlaceList/getPlaceListSlice";
import { saveUserData, savePlaceData } from "./userDataSlice";

import MainContainer from "../../material/MainContainer";
import AutocompleteC from "../../material/AutocompleteC";
import DatePicker from "../../material/DatePicker";
import SubHeader from "../../material/SubHeader";
import Input from "../../material/Input";
import Form from "../../material/Form";

const schema = yup.object().shape({
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
});

const UserDataFormComponent = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const placeData = useSelector(selectPlaceResponse);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getPlaceListByString());
  }, []);

  //Exec. placeData fn to load full place obj.
  const handlePlaceChange = (placeData) => {
    dispatch(savePlaceData(placeData));
  };

  const onSubmit = (data) => {
    dispatch(saveUserData(data));
    history.push("/vehicleByPlateResult");
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
            <Input
              type="text"
              fullWidth
              label="Nombres"
              name="firstName"
              ref={register}
              error={!!errors.firstName}
              helperText={errors?.firstName?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              type="text"
              fullWidth
              label="Apellidos"
              name="lastName"
              ref={register}
              error={!!errors.lastName}
              helperText={errors?.lastName?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DatePicker
              fullWidth
              name="birthDate"
              label="Fecha de Nacimiento"
              ref={register}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              type="email"
              fullWidth
              label="Email"
              name="email"
              ref={register}
              error={!!errors.email}
              helperText={errors?.email?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              type="text"
              fullWidth
              label="Teléfono"
              name="phoneNumber"
              ref={register}
              error={!!errors.phoneNumber}
              helperText={errors?.phoneNumber?.message}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutocompleteC
              name="placeData"
              label="Ciudad"
              //Sending place fn as prop to save entire placeData obj
              regPlaceData={handlePlaceChange}
              //Using register to handle input validation only
              ref={register}
              error={!!errors.placeData}
              helperText={errors?.placeData?.message}
              options={placeData.data}
            />
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

export default withRouter(UserDataFormComponent);
