import React from "react";
//TODO: Add company logo and color palette
//TODO: Create drawer menu
import {
  Button,
  Card,
  CardMedia,
  CardActions,
  Typography,
  CardContent,
  makeStyles,
  Divider,
} from "@material-ui/core";
import { withRouter, useHistory } from "react-router-dom";
import MainContainer from "../../material/MainContainer";
import Header from "../../material/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "80%",
  },
  dividerMargin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  btnStyle: {
    margin: "0 auto",
  },
}));

const HomeComponent = () => {
  const history = useHistory();
  const styles = useStyles();
  return (
    <MainContainer>
      <Card className={styles.root}>
        <CardMedia
          component="img"
          alt="HomeComponent"
          height="140"
          image="https://via.placeholder.com/1366x768"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Header />
          <Divider className={styles.dividerMargin} />
          <Typography variant="body2" color="textSecondary" component="p">
            AgenteMotor facilita a las agencias instalar directamente en su
            página web un formulario de cotización para clientes, mediante al
            cual, al llenar el formulario, permite de manera automática realizar
            y visualizar, sin intervención del asesor, las diferentes ofertas
            disponibles por parte de la agencia para su perfil y vehículo
            especifico.El asesor encargado de atender a estos clientes es
            informado de manera inmediata, via correo electrónico, de tal manera
            que pueda tomar contacto con el cliente y realice la asesoría
            requerida para el cierre de venta. Esta herramienta, además de
            aumentar la satisfacción del usuario, aumenta el número de referidos
            dada la facilidad de uso que encuentran los usuarios al poder
            cotizar en cualquier momento del día, sin depender del tiempo del
            asesor, pero sin perder precisamente el valor agregado de la
            asesoría y cercanía de la agencia.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => history.push("/vehicleSearch")}
            size="large"
            className={styles.btnStyle}
            variant="outlined"
            color="primary"
          >
            Cotizar
          </Button>
        </CardActions>
      </Card>
    </MainContainer>
  );
};

export default withRouter(HomeComponent);
