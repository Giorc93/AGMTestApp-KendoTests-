import React from "react";
//TODO: Add company logo
//TODO: Menu drawer
import { NearMe as NearMeIcon } from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  titleText: {
    color: "white",
  },
}));

const NavBar = () => {
  const styles = useStyles();
  const history = useHistory();

  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton
          edge="start"
          className={styles.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <NearMeIcon />
        </IconButton>
        <Typography className={styles.title}>
          <Link
            onClick={() => history.push("/")}
            component="button"
            className={styles.titleText}
            underline="none"
            variant="h5"
          >
            AgenteMotor
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
