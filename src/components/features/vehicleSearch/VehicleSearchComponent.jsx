import React, { useState } from "react";

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
    marginBottom: theme.spacing(2),
  },
  btnStyle: {
    margin: "0 auto",
  },
  paper: {
    flexGrow: 1,
  },
}));

const VehicleSearchComponent = () => {
  const [toggler, setToggler] = useState(true);
  const styles = useStyles();
  var title = toggler ? "Consulta por Placa" : "Consultar por Referencia";

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
          <Divider className={styles.dividerMargin} />
          <Grid container justify="center">
            <Grid item x={12}>
              {toggler && <PlateSearchComponent />}
              {!toggler && <ReferenceSearchComponent />}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            onClick={handleToggle}
            className={styles.btnStyle}
            variant="outlined"
            color="primary"
          >
            {toggler ? "Consultar por Referencia" : "Consultar por Placa"}
          </Button>
        </CardActions>
      </Card>
    </MainContainer>
  );
};

export default withRouter(VehicleSearchComponent);
