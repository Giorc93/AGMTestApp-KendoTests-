import React from "react";

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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 345,
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
  buttonsF: {
    flexGrow: 1,
  },
}));

const CardC = (props) => {
  const styles = useStyles();
  const refValue = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(props.vehData.vehicle_risk.reference_price);

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
            Código: {props.vehData.code}
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
            <Grid item xs={12} md={6}>
              <Typography variant="body1" color="textSecondary">
                <strong>Placa: </strong>
                {props.vehData.plate.toUpperCase()}
              </Typography>
            </Grid>
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
                {props.vehData.cylinder}
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
        <Button
          className={styles.buttonsF}
          variant="contained"
          size="small"
          color="default"
        >
          No es mi vehiculo
        </Button>
        <Button
          className={styles.buttonsF}
          variant="contained"
          size="small"
          color="primary"
        >
          ¡Es mi vehiculo!
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardC;
