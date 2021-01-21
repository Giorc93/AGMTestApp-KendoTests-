import React, { Fragment } from "react";
//TODO: Add styles
import { makeStyles, CircularProgress } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectPlateResponse } from "../plateSearch/plateDataSlice";

import MainContainer from "../../material/MainContainer";
import { Alert, AlertTitle } from "@material-ui/lab";
import SubHeader from "../../material/SubHeader";
import CardC from "../../material/CardC";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 380,
  },
  media: {
    height: 240,
  },
  circProg: {
    marginLeft: theme.spacing(2),
  },
}));

const VehicleByPlateResult = () => {
  const styles = useStyles();
  const plateResponse = useSelector(selectPlateResponse);
  const vehicleData =
    plateResponse.data.length > 0 ? plateResponse.data[0].vehicle : undefined;
  console.log(vehicleData);

  return (
    <MainContainer>
      <SubHeader>Resultados de la Consulta</SubHeader>
      {plateResponse.status === "loading" && (
        <Alert severity="info">
          <AlertTitle>
            Cargando Información
            <CircularProgress className={styles.circProg} size={16} />
          </AlertTitle>
          Estamos recuperando la información del vehiculo —{" "}
          <strong>Modificar número de placa</strong>
        </Alert>
      )}
      {plateResponse.status === "success" && (
        <Fragment>
          {vehicleData === undefined && (
            <Alert severity="warning">
              <AlertTitle>¡Vehiculo No Encontrado!</AlertTitle>
              No hemos encontrado ningún vehiculo con la información
              suministrada — <strong>Revisa el número de placa</strong>
            </Alert>
          )}
          {vehicleData !== undefined && <CardC vehData={vehicleData} />}
        </Fragment>
      )}
      {plateResponse.status === "failed" && (
        <Alert severity="error">
          <AlertTitle>¡Algo ha salido mal!</AlertTitle>
          No es posible acceder a la información del vehículo en el momento —{" "}
          <strong>Informar a soporte</strong>
        </Alert>
      )}
    </MainContainer>
  );
};

export default withRouter(VehicleByPlateResult);

/*
{vehicleData === undefined && (
        <Alert severity="warning">
          <AlertTitle>¡Vehiculo No Encontrado!</AlertTitle>
          No hemos encontrado ningún vehiculo con la información suministrada —{" "}
          <strong>Revisa el número de placa</strong>
        </Alert>
      )}
      {vehicleData !== undefined && <CardC vehData={vehicleData} />}
*/
