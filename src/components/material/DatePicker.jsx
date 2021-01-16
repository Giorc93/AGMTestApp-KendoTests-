import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

const DatePicker = forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <TextField
      type="date"
      variant="outlined"
      inputRef={ref}
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
    />
  );
});

export default DatePicker;
