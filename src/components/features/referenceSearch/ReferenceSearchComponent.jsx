import React, { useState } from "react";
//TODO: Add AutoComplete field (Vehicle brands)
//TODO: Add model field
//TODO: Add AutoComplete field (Vehicle Ref)
import { Grid, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory, withRouter } from "react-router-dom";
import Form from "../../material/Form";
import Input from "../../material/Input";

const ReferenceSearchComponent = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
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
      <Button type="submit" variant="outlined" color="primary" fullWidth>
        Consultar
      </Button>
    </Form>
  );
};

export default withRouter(ReferenceSearchComponent);
