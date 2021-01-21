import React from "react";

import { Controller } from "react-hook-form";

import {
  makeStyles,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const RadioButton = (props) => {
  const styles = useStyles();
  return (
    <div>
      <label>Género</label>
      <Controller
        control={props.control}
        as={
          <RadioGroup row name="gender">
            {props.options.map((option, i) => (
              <FormControlLabel
                key={i}
                value={option.value}
                control={<Radio color="primary" />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        }
        name={props.name}
      />
    </div>
  );
};

export default RadioButton;
