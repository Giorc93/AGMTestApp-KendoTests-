import React from "react";

//TODO: Add styles to form

import { withRouter, useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";

import { savePlateNumber, getVehicleDataByPlate } from "./plateDataSlice";
import Input from "../../material/Input";
import Form from "../../material/Form";

const schema = yup.object().shape({
  //TODO: Modify REGEXP to plate validation (Plate formart)
  plateNumber: yup
    .string()
    .matches(/^(^[0-9A-Za-z]*)$/, "No se permiten carácteres especiales")
    .min(6, "Placa inválida")
    .max(6, "Placa inválida")
    .required("Debes ingresar un número de placa"),
});

const PlateSearchComponent = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(savePlateNumber(data));
    dispatch(getVehicleDataByPlate(data.plateNumber));
    history.push("/vehicleByPlateResult");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} justify="center">
        <Grid container item xs={12} justify="center">
          <Input
            type="text"
            label="Número De Placa"
            name="plateNumber"
            ref={register}
            error={!!errors.plateNumber}
            helperText={errors?.plateNumber?.message}
          />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Button type="submit" variant="outlined" color="primary">
            Consultar
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default withRouter(PlateSearchComponent);
