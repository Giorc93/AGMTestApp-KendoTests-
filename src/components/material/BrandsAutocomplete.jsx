import React, { forwardRef, Fragment } from "react";

import { TextField, makeStyles } from "@material-ui/core";
import { Autocomplete, Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

const BrandsAutocomplete = forwardRef((props, ref) => {
  const styles = useStyles();
  const brandsData = props.options;
  return (
    <Fragment>
      {brandsData.status === "loading" && (
        <Autocomplete
          className={styles.root}
          options={[
            { val: "Cargando", label: "Obteniendo listado de marcas..." },
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
      {brandsData.status === "success" && (
        <Autocomplete
          className={styles.root}
          options={brandsData.data}
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
      {brandsData.status === "failed" && (
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
            Lista de marcas no disponible - Recargar...
          </Alert>
        </>
      )}
    </Fragment>
  );
});

export default BrandsAutocomplete;
