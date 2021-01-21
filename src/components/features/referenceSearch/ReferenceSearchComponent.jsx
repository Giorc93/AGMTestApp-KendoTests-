import React, { useState } from "react";
//TODO: Add AutoComplete field (Vehicle brands)
//TODO: Add model field
//TODO: Add AutoComplete field (Vehicle Ref)
import { useHistory, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

import { getVehicleDataByRef, selectRefResponse } from "./referenceDataSlice";

import MainContainer from "../../material/MainContainer";
import DataTable from "../../material/DataTable";
import Input from "../../material/Input";
import Form from "../../material/Form";

const ReferenceSearchComponent = () => {
  const refDataResponse = useSelector(selectRefResponse);
  const refData = refDataResponse.data;
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const getRef = () => {
    dispatch(getVehicleDataByRef({ line: "camaro" }));
    console.log(refDataResponse);
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12}>
            <Input
              type="text"
              fullWidth
              label="Referencia"
              name="vehBrand"
              ref={register}
            />
          </Grid>
        </Grid>
        <Button
          onClick={() => getRef()}
          variant="outlined"
          color="primary"
          fullWidth
        >
          Consultar
        </Button>
      </Form>
      <DataTable data={refData} />
    </>
  );
};

export default withRouter(ReferenceSearchComponent);
