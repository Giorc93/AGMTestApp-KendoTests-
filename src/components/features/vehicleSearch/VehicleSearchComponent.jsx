import React, { useState } from "react";
//TODO: Change plate/ref container and toggler (Tabs)
import ReferenceSearchComponent from "../referenceSearch/ReferenceSearchComponent";
import PlateSearchComponent from "../plateSearch/PlateSearchComponent";
import {
  Card,
  CardMedia,
  CardContent,
  Divider,
  Grid,
  CardActions,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import MainContainer from "../../material/MainContainer";
import SubHeader from "../../material/SubHeader";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "80%",
  },
  dividerMargin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  btnStyle: {
    margin: "0 auto",
  },
  paper: {
    flexGrow: 1,
  },
  textCenter: {
    textAlign: "center",
  },
}));

const VehicleSearchComponent = () => {
  const [toggler, setToggler] = useState(true);
  const styles = useStyles();
  var title = toggler ? "CONSULTA POR PLACA" : "CONSULTA POR REFERENCIA";
  var subtitle = toggler
    ? "Si no conoces el número de placa puedes intentar una busqueda por referencia"
    : "Si conoces el número de placa puedes realizar tu consulta por placa";

  const handleToggle = () => {
    setToggler(!toggler);
  };

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
          <SubHeader>{title}</SubHeader>
          <Typography variant="body2" className={styles.textCenter}>
            {subtitle}
          </Typography>
          <CardActions>
            <Button
              onClick={handleToggle}
              className={styles.btnStyle}
              variant="text"
              color="primary"
            >
              {toggler ? "Consultar por Referencia" : "Consultar por Placa"}
            </Button>
          </CardActions>
          <Divider className={styles.dividerMargin} />
          <Grid container justify="center">
            <Grid item xs={12}>
              {toggler && <PlateSearchComponent />}
              {!toggler && <ReferenceSearchComponent />}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </MainContainer>
  );
};

export default withRouter(VehicleSearchComponent);
