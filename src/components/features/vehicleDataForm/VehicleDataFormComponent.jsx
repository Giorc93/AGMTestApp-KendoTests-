import React, { useEffect } from "react";

import { Grid, Typography, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  getPlaceListByString,
  selectPlaceResponse,
} from "../getPlaceList/getPlaceListSlice";
import { saveVehicleData, savePlaceData } from "./vehicleDataSlice";
import { yupSchema } from "./userDataUtils";

import CitiesAutocomplete from "../../material/CitiesAutocomplete";
import MainContainer from "../../material/MainContainer";
import SelectInput from "../../material/SelectInput";
import RadioButton from "../../material/RadioButton";
import DatePicker from "../../material/DatePicker";
import SubHeader from "../../material/SubHeader";
import Input from "../../material/Input";
import Form from "../../material/Form";

const schema = yup.object().shape(yupSchema);

const vehicleDataFormComponent = () => {
  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const placeData = useSelector(selectPlaceResponse);

  const dispatch = useDispatch();

  //Exec. placeData fn to load full place obj.
  const handlePlaceChange = (placeData) => {
    dispatch(savePlaceData(placeData));
  };

  const onSubmit = (data) => {
    dispatch(saveUserData(data));
  };

  useEffect(() => {
    dispatch(getPlaceListByString());
  }, [dispatch]);

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
            <RadioButton control={control} name="gender" options={genderArr} />
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
            <CitiesAutocomplete
              name="placeData"
              label="Ciudad de Circulación"
              //Sending place fn as prop to save entire placeData obj
              regPlaceData={handlePlaceChange}
              //Using register to handle input validation only
              ref={register}
              error={!!errors.placeData}
              helperText={errors?.placeData?.message}
              options={placeData}
            />
          </Grid>
          <Grid container item xs={12} justify="center">
            <Button
              type="submit"
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

export default withRouter(vehicleDataFormComponent);
