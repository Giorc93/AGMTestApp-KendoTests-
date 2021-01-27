import React from "react";

import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    fontSize: 32,
    marginBottom: theme.spacing(2),
  },
}));

const SubHeader = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Typography className={styles.root} component="h2" {...props}>
      {children}
    </Typography>
  );
};

export default SubHeader;
