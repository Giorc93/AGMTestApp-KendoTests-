import React from "react";
//TODO: Check @media on minHeigth. (64px val is not const)
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: `calc(100vh - 64px)`,
  },
}));

const MainContainer = ({ children, ...props }) => {
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

export default MainContainer;
