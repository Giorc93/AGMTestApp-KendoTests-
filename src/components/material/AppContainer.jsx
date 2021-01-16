import React from "react";

import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
  },
}));

const AppContainer = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Container
      component="main"
      maxWidth="lg"
      className={styles.root}
      {...props}
    >
      {children}
    </Container>
  );
};

export default AppContainer;
