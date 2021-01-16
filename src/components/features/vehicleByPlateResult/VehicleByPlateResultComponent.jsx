import React from "react";

import { withRouter, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectPlateResponse } from "../plateSearch/plateDataSlice";

import MainContainer from "../../material/MainContainer";
import CardC from "../../material/CardC";
import SubHeader from "../../material/SubHeader";
import { Alert, AlertTitle } from "@material-ui/lab";

const VehicleByPlateResult = () => {
  const plateResponse = useSelector(selectPlateResponse);
  const vehicleData =
    plateResponse.data.length > 0 ? plateResponse.data[0].vehicle : undefined;

  console.log(vehicleData);

  return (
    <MainContainer>
      <SubHeader>Resultados de la Consulta</SubHeader>
      {vehicleData === undefined && (
        <Alert severity="warning">
          <AlertTitle>¡Vehiculo No Encontrado!</AlertTitle>
          No hemos encontrado ningún vehiculo con la información suministrada —{" "}
          <strong>Revisa el número de placa</strong>
        </Alert>
      )}
      {vehicleData !== undefined && <CardC vehData={vehicleData} />}
    </MainContainer>
  );
};

export default withRouter(VehicleByPlateResult);