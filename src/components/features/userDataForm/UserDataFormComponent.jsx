import React, { useEffect } from "react";
//TODO: Check forwardRef
import { Grid, Typography, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  getPlaceListByString,
  selectPlaceResponse,
} from "../getPlaceList/getPlaceListSlice";
import { saveUserData, savePlaceData } from "./userDataSlice";
import { idTypeArr, genderArr } from "../../utils/inputArrays";
import { yupSchema } from "./userDataUtils";

import MainContainer from "../../material/MainContainer";
import CitiesAutocomplete from "../../material/CitiesAutocomplete";
import SelectInput from "../../material/SelectInput";
import RadioButton from "../../material/RadioButton";
import DatePicker from "../../material/DatePicker";
import SubHeader from "../../material/SubHeader";
import Input from "../../material/Input";
import Form from "../../material/Form";

const schema = yup.object().shape(yupSchema);

const UserDataFormComponent = () => {
  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    dispatch(getPlaceListByString());
  }, []);

  const placeData = useSelector(selectPlaceResponse);

  const dispatch = useDispatch();

  //Exec. placeData fn to load full place obj.
  const handlePlaceChange = (placeData) => {
    dispatch(savePlaceData(placeData));
  };

  const onSubmit = (data) => {
    dispatch(saveUserData(data));
    //console.log(data);
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
            <SelectInput
              options={idTypeArr}
              name="idType"
              control={control}
              ref={register}
              label="Tipo de Documento"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RadioButton control={control} name="gender" options={genderArr} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              type="text"
              fullWidth
              label="Número de Documento"
              name="idNumber"
              ref={register}
              error={!!errors.idNumber}
              helperText={errors?.idNumber?.message}
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
            <CitiesAutocomplete
              name="placeData"
              label="Ciudad"
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

/*
<SelectInput
              options={idTypeArr}
              name="idType"
              ref={register}
              label="Tipo de Documento"
            />
*/
