import React, { Fragment, useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
} from "@progress/kendo-react-layout";
import { Form, FormElement, Field } from "@progress/kendo-react-form";
import { withRouter, useHistory } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import { useDispatch } from "react-redux";

import {
  numericValidator,
  nitValidator,
  idTypeValidator,
} from "../../utils/formValidators";
import { saveDocumentData } from "./documentDataSlice";
import { FormCombobox, FormInput } from "../../kendo/FormComponents";
import { idTypeArr } from "../../utils/inputArrays";

const DocumentDataFormComponent = () => {
  const [isPerson, setIsPerson] = useState(true);

  const history = useHistory();

  const dispatch = useDispatch();

  const onIdTypeChange = (type) => {
    type.value === "NIT" ? setIsPerson(false) : setIsPerson(true);
  };

  const handleSubmit = (dataItem) => {
    dispatch(saveDocumentData(dataItem));
    history.push("/vehicleByPlateResult");
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
                INFORMACIÓN DE DOCUMENTO
              </CardTitle>
              <CardBody>
                <Form
                  onSubmit={handleSubmit}
                  initialValues={{
                    idType: { value: "CC", label: "Cedula de Ciudadanía" },
                  }}
                  render={(formRenderProps) => (
                    <FormElement style={{ width: 400 }}>
                      {/*<fieldset className={"k-form-fieldset"}>
                        <legend className={"k-form-legend"}>
                          PLATE SEARCH
                  </legend>*/}
                      <Field
                        data={idTypeArr}
                        textField="label"
                        name={"idType"}
                        label={"Tipo de Documento"}
                        component={FormCombobox}
                        validator={idTypeValidator}
                        onClose={(e) => onIdTypeChange(e.target.value)}
                      />
                      <Field
                        id={"idNumber"}
                        name={"idNumber"}
                        label={
                          isPerson ? "Número de Documento" : "Número de NIT"
                        }
                        component={FormInput}
                        validator={isPerson ? numericValidator : nitValidator}
                      />
                      <span className={"k-form-separator"} />
                      <div className="k-form-buttons k-buttons-end">
                        <Button primary={true} type={"submit"} icon="search">
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

export default withRouter(DocumentDataFormComponent);
