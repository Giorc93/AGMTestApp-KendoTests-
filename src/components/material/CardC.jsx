import React from "react";
// Car Result Card Component

import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  makeStyles,
  Divider,
  Grid,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { saveVehicleData } from "../features/referenceSearch/referenceDataSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    minWidth: 345,
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 140,
  },
  upppercase: {
    textTransform: "uppercase",
  },
  capitalText: {
    textTransform: "capitalize",
  },
  dividerMargin: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  buttonsFlex: {
    flexGrow: 1,
  },
}));

const CardC = (props) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const styles = useStyles();

  const refValue = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(props.vehData.vehicle_risk.reference_price);

  const selectVehicle = () => {
    dispatch(saveVehicleData(props.vehData));
    history.push("/documentDataForm");
  };

  return (
    <Card className={styles.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={styles.media}
          image="https://via.placeholder.com/345x150"
          title="placeHolderImg"
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.vehData.brand}
          </Typography>
          <Typography variant="caption" className={styles.capitalText}>
            {props.vehData.type}
          </Typography>
          <Typography variant="subtitle2">
            Código Fasecolda: {props.vehData.code}
          </Typography>
          <Divider className={styles.dividerMargin} />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="body1" color="textSecondary">
                <strong>Referencia: </strong>
                {props.vehData.codification.line1}{" "}
                {props.vehData.codification.line2}{" "}
                {props.vehData.codification.line3}
              </Typography>
            </Grid>
            {props.vehData.plate && (
              <Grid item xs={12} md={6}>
                <Typography variant="body1" color="textSecondary">
                  <strong>Placa: </strong>
                  {props.vehData.plate.toUpperCase()}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                color="textSecondary"
                className={styles.capitalText}
              >
                <strong>Tipo: </strong>
                {props.vehData.vehicle_risk.plate_type}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" color="textSecondary">
                <strong>Modelo: </strong>
                {props.vehData.model}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" color="textSecondary">
                <strong>Pasajeros: </strong>
                {props.vehData.number_passengers}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" color="textSecondary">
                <strong>Cilindraje: </strong>
                {props.vehData.cylinder} cm<sup>3</sup>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="textSecondary">
                <strong>Precio de Referencia: </strong>
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {refValue} <strong>COP</strong>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {props.origin === "plateSearch" && (
          <Button
            className={styles.buttonsFlex}
            variant="contained"
            size="medium"
            color="default"
            onClick={() => history.push("/vehicleSearch")}
          >
            No es mi vehiculo
          </Button>
        )}
        <Button
          className={styles.buttonsFlex}
          variant="contained"
          size="medium"
          color="primary"
          onClick={() => selectVehicle()}
        >
          ¡Es mi vehiculo!
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardC;
