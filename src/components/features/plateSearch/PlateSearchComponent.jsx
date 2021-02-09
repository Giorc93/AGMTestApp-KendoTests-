import React, { Fragment } from "react";

import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardFooter,
  CardBody,
} from "@progress/kendo-react-layout";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
//TODO: Add styles to form

import { withRouter, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { savePlateNumber, getVehicleDataByPlate } from "./plateDataSlice";

import { plateValidator } from "../../utils/formValidators";
import { FormInput } from "../../kendo/FormComponents";

const PlateSearchComponent = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = (dataItem) => {
    dispatch(savePlateNumber(dataItem));
    dispatch(getVehicleDataByPlate(dataItem.plateNumber));
    history.push("/documentDataForm");
  };
  return (
    <Fragment>
      <div className="container-fluid">
        <main className="d-flex justify-content-center align-content-center">
          <Card
            style={{
              width: 500,
              boxShadow: "0 0 4px 0 rgba(0,0,0,.1)",
              marginTop: 15,
            }}
          >
            <CardHeader>
              <CardTitle style={{ textAlign: "center" }}>
                CONSULTA POR PLACA
              </CardTitle>
              <CardSubtitle style={{ textAlign: "justify" }}>
                Puedes realizar la búsqueda de tu vehículo por el número de
                placa
              </CardSubtitle>
              <CardBody>
                <Form
                  onSubmit={handleSubmit}
                  render={(formRenderProps) => (
                    <FormElement style={{ width: 400 }}>
                      {/*<fieldset className={"k-form-fieldset"}>
                        <legend className={"k-form-legend"}>
                          PLATE SEARCH
                  </legend>*/}
                      <Field
                        id={"plateNumberField"}
                        name={"plateNumber"}
                        label={"Número de Placa"}
                        hint={"Ejemplo: ABC123"}
                        component={FormInput}
                        validator={plateValidator}
                      />
                      <div className="k-form-buttons">
                        <Button look="flat" icon="help">
                          No conozco el número de placa
                        </Button>
                      </div>
                      <span className={"k-form-separator"} />
                      <div className="k-form-buttons k-buttons-end">
                        <Button
                          primary={true}
                          type={"submit"}
                          icon="search"
                          disabled={!formRenderProps.allowSubmit}
                        >
                          Consultar
                        </Button>
                        {/*<Button onClick={formRenderProps.onFormReset}>
                          Clear
                        </Button>*}
                      {/*</fieldset>*/}
                      </div>
                    </FormElement>
                  )}
                />
              </CardBody>
            </CardHeader>
          </Card>
        </main>
      </div>
    </Fragment>
  );
};

export default withRouter(PlateSearchComponent);
