import React from "react";

import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    fontSize: "40px",
  },
}));

const Header = () => {
  const styles = useStyles();

  return (
    <Typography className={styles.root} component="h1">
      AgenteMotor TestApp
    </Typography>
  );
};

export default Header;
