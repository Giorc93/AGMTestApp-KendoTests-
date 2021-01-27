import React, { forwardRef, Fragment } from "react";

import { TextField, makeStyles } from "@material-ui/core";
import { Autocomplete, Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

const ReferencesAutocomplete = forwardRef((props, ref) => {
  const styles = useStyles();
  const referencesData = props.options;
  return (
    <Fragment>
      {referencesData.status === "null" && (
        <Autocomplete
          className={styles.root}
          disabled
          options={[
            {
              val: "Sin Información",
              label: "Introduce la marca y el modelo del vehiculo",
            },
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
      {referencesData.status === "loading" && (
        <Autocomplete
          className={styles.root}
          options={[
            { val: "Cargando", label: "Obteniendo listado de referencias..." },
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
      {referencesData.status === "success" && (
        <Autocomplete
          className={styles.root}
          options={referencesData.data}
          autoHighlight
          getOptionLabel={(option) => option}
          renderOption={(option) => (
            <Fragment>
              <span>{option}</span>
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
      {referencesData.status === "failed" && (
        <>
          <Autocomplete
            className={styles.root}
            options={[]}
            disabled
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
            Lista de referencias no disponible - Recargar...
          </Alert>
        </>
      )}
    </Fragment>
  );
});

export default ReferencesAutocomplete;
