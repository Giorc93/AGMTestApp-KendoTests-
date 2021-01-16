import React, { forwardRef, Fragment } from "react";

import { TextField, makeStyles } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

const AutocompleteC = forwardRef((props, ref) => {
  const styles = useStyles();
  return (
    <Autocomplete
      className={styles.root}
      options={props.options}
      autoHighlight
      onChange={(e, val) => props.regPlaceData(val)}
      getOptionLabel={(option) => `${option.city_name} - ${option.state_name}`}
      renderOption={(option) => (
        <Fragment>
          <span>{option.city_name} - </span>
          <strong>{option.state_name}</strong>
        </Fragment>
      )}
      renderInput={(params) => (
        <TextField inputRef={ref} {...props} {...params} variant="outlined" />
      )}
    />
  );
});

export default AutocompleteC;
