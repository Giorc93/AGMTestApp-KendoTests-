import React, { forwardRef, Fragment } from "react";

import { TextField, makeStyles } from "@material-ui/core";
import { Autocomplete, Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

const CitiesAutoComplete = forwardRef((props, ref) => {
  const styles = useStyles();
  const placeData = props.options;
  return (
    <Fragment>
      {placeData.status === "loading" && (
        <Autocomplete
          className={styles.root}
          options={[
            { val: "Cargando", label: "Obteniendo listado de ciudades..." },
          ]}
          autoHighlight
          getOptionLabel={(option) => option.val}
          renderOption={(option) => (
            <Fragment>
              <strong>{option.label}</strong>
            </Fragment>
          )}
          renderInput={(params) => (
            <TextField
              inputRef={ref}
              {...props}
              {...params}
              variant="outlined"
            />
          )}
        />
      )}
      {placeData.status === "success" && (
        <Autocomplete
          className={styles.root}
          options={placeData.data}
          autoHighlight
          onChange={(e, val) => props.regPlaceData(val)}
          getOptionLabel={(option) =>
            `${option.city_name} - ${option.state_name}`
          }
          renderOption={(option) => (
            <Fragment>
              <span>{option.city_name} - </span>
              <strong>{option.state_name}</strong>
            </Fragment>
          )}
          renderInput={(params) => (
            <TextField
              inputRef={ref}
              {...props}
              {...params}
              variant="outlined"
            />
          )}
        />
      )}
      {placeData.status === "failed" && (
        <>
          <Autocomplete
            className={styles.root}
            options={[]}
            autoHighlight
            renderInput={(params) => (
              <TextField
                inputRef={ref}
                {...props}
                {...params}
                variant="outlined"
              />
            )}
          />
          <Alert severity="error">
            Lista de ciudades no disponible - Recargar...
          </Alert>
        </>
      )}
    </Fragment>
  );
});

export default CitiesAutoComplete;
