import React, { useEffect } from "react";
//TODO: Add yup Schema
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";

import { getVehicleDataByRef, resetState } from "./referenceDataSlice";
import {
  getBrandsList,
  selectBrandsResponse,
} from "../getBrandsList/getBrandsListSlice";

import BrandsAutocomplete from "../../material/BrandsAutocomplete";
import CarCards from "../../material/CarCards";
import Input from "../../material/Input";
import Form from "../../material/Form";

const ReferenceSearchComponent = () => {
  useEffect(() => {
    dispatch(getBrandsList());

    return dispatch(resetState());
  }, []);

  const brandsData = useSelector(selectBrandsResponse);

  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    dispatch(getVehicleDataByRef(data));
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <BrandsAutocomplete
              name="brand"
              label="Marca"
              ref={register}
              options={brandsData}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Input
              type="number"
              fullWidth
              label="Modelo"
              name="model"
              ref={register}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Input
              type="text"
              fullWidth
              label="Referencia"
              name="line"
              ref={register}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} justify="center">
          <Button type="submit" variant="outlined" size="large" color="primary">
            Consultar
          </Button>
        </Grid>
      </Form>
      <br />
      <CarCards />
    </>
  );
};

export default withRouter(ReferenceSearchComponent);
