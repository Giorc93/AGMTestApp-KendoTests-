import React from "react";

import { Alert, AlertTitle } from "@material-ui/lab";

import { withRouter, useHistory } from "react-router-dom";

import MainContainer from "../../material/MainContainer";
import { Link } from "@material-ui/core";

//TODO: Add alert and styles
const ErrorComponent = () => {
  const history = useHistory();

  return (
    <MainContainer>
      <Alert severity="error">
        <AlertTitle>¡Oops! </AlertTitle>
        Parece que la página que buscas no existe —{" "}
        <Link
          onClick={() => history.push("/")}
          component="button"
          underline="none"
          variant="body2"
        >
          <strong>Volver al inicio</strong>
        </Link>
      </Alert>
    </MainContainer>
  );
};

export default withRouter(ErrorComponent);
