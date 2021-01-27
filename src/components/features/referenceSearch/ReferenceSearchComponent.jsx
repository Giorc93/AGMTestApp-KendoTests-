import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  selectReferencesResponse,
  getReferencesList,
} from "../getReferencesList/getReferencesListSlice";
import {
  getVehicleDataByRef,
  resetVehicleDataState,
} from "./referenceDataSlice";
import {
  getBrandsList,
  selectBrandsResponse,
} from "../getBrandsList/getBrandsListSlice";
import { yupSchema } from "./referenceDataUtils";

import ReferencesAutocomplete from "../../material/ReferencesAutocomplete";
import BrandsAutocomplete from "../../material/BrandsAutocomplete";
import CarCards from "../../material/CarCards";
import Input from "../../material/Input";
import Form from "../../material/Form";

const schema = yup.object().shape(yupSchema);

const ReferenceSearchComponent = () => {
  const dispatch = useDispatch();

  const referencesData = useSelector(selectReferencesResponse);

  const brandsData = useSelector(selectBrandsResponse);

  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const [vehicleData, setVehicleData] = useState({
    brand: undefined,
    model: undefined,
  });

  const setVehicleState = (data) => {
    switch (data.name) {
      case "brand":
        setVehicleData({ ...vehicleData, brand: data.value });
        break;
      case "model":
        setVehicleData({ ...vehicleData, model: data.value });
        break;
      default:
        setVehicleData(vehicleData);
    }
  };

  const onSubmit = (data) => {
    dispatch(getVehicleDataByRef(data));
  };

  const getRefList = () => {
    vehicleData.model !== undefined &&
      vehicleData.model !== "" &&
      vehicleData.model > 1900 &&
      dispatch(getReferencesList(vehicleData));
  };

  useEffect(() => {
    dispatch(getBrandsList());

    return () => {
      dispatch(resetVehicleDataState());
    };
  }, [dispatch]);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <BrandsAutocomplete
              name="brand"
              label="Marca"
              ref={register}
              onSelect={(e) => setVehicleState(e.target)}
              onBlur={() => getRefList()}
              error={!!errors.brand}
              helperText={errors?.brand?.message}
              options={brandsData}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Input
              type="number"
              fullWidth
              label="Modelo"
              name="model"
              disabled={vehicleData.brand !== undefined ? false : true}
              onChange={(e) => setVehicleState(e.target)}
              onBlur={() => getRefList()}
              ref={register}
              error={!!errors.model}
              helperText={errors?.model?.message}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ReferencesAutocomplete
              name="line"
              label="Referencia"
              ref={register}
              error={!!errors.line}
              helperText={errors?.line?.message}
              options={referencesData}
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
