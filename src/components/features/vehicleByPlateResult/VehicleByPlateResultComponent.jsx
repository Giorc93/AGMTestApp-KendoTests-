import React, { Fragment } from "react";
//TODO: Add styles
import { withRouter, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectPlateResponse } from "../plateSearch/plateDataSlice";
import { setOrigin } from "../globalSlice";
import { Button } from "@progress/kendo-react-buttons";

const VehicleByPlateResult = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const plateResponse = useSelector(selectPlateResponse);
  const vehicleData =
    plateResponse.status === "success" && plateResponse.data.length > 0
      ? plateResponse.data[0].vehicle
      : undefined;

  const referencePrice = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(plateResponse.data[0].vehicle.vehicle_risk.reference_price);

  const handleSelection = (value) => {
    value && dispatch(setOrigin("plate"));
    !value && dispatch(setOrigin("reference"));
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <main className="d-flex justify-content-center align-content-center">
          {plateResponse.status === "loading" && (
            <div
              className="alert alert-warning"
              role="alert"
              style={{ width: "50%" }}
            >
              <div className="d-flex justify-content-between">
                <h4 className="alert-heading">
                  <span className="align-middle">Cargando</span>
                </h4>
                <span
                  className="k-icon k-i-loading"
                  style={{ fontSize: 32 }}
                ></span>
              </div>
              <p>Estamos cargando la información de tu vehículo</p>
              <hr />
              <p className="mb-0">
                Si el proceso tarda más de lo esperado, puedes intentar{" "}
                <div className="d-flex justify-content-between">
                  <Button
                    look="flat"
                    onClick={() => history.push("/referenceSearch")}
                  >
                    <strong>Búsqueda por refencia</strong>
                  </Button>
                  <Button
                    look="flat"
                    onClick={() => history.push("/plateSearch")}
                  >
                    <strong>Modificar placa</strong>
                  </Button>
                </div>
              </p>
            </div>
          )}
          {vehicleData !== undefined && (
            <Card
              style={{
                width: 500,
                boxShadow: "0 0 4px 0 rgba(0,0,0,.1)",
                marginTop: 15,
              }}
            >
              <CardHeader>
                <CardTitle style={{ textAlign: "center" }}>
                  {vehicleData.plate}
                </CardTitle>
                <CardSubtitle style={{ textAlign: "center" }}>
                  <strong>{vehicleData.brand}</strong>{" "}
                  {vehicleData.codification.line1}{" "}
                  {vehicleData.codification.line2}{" "}
                  {vehicleData.codification.line3}
                </CardSubtitle>
              </CardHeader>
              <CardImage
                src="https://via.placeholder.com/350x150"
                style={{ height: "240px", maxWidth: "100%" }}
              ></CardImage>
              <CardBody>
                <div className="container">
                  <div className="row">
                    <div className="container col-12 col-sm-6">
                      <span className="row col">
                        <strong>Código Fasecolda </strong>
                      </span>
                      <span className="row col">{vehicleData.code}</span>
                    </div>
                    <div className="col-12 col-sm-6">
                      <span className="row col">
                        <strong>Modelo </strong>
                      </span>
                      <span className="row col">{vehicleData.model}</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <span className="row col">
                        <strong>Cilindraje </strong>
                      </span>
                      <span className="row col">{vehicleData.cylinder}</span>
                    </div>
                    <div className="col-12 col-sm-6">
                      <span className="row col">
                        <strong>Pasajeros </strong>
                      </span>
                      <span className="row col">
                        {vehicleData.number_passengers}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <span className="row col">
                        <strong>Precio Referencia Fasecolda </strong>
                      </span>
                      <span className="row col">
                        {referencePrice}
                        {" COP"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardBody>
              <CardActions
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  <Button onClick={() => handleSelection(false)}>
                    No es mi vehículo
                  </Button>
                </div>
                <div>
                  <Button primary={true} onClick={() => handleSelection(true)}>
                    Es mi vehiculo
                  </Button>
                </div>
              </CardActions>
            </Card>
          )}
          {plateResponse.status === "failed" && (
            <div
              className="alert alert-danger"
              role="alert"
              style={{ width: "50%" }}
            >
              <div className="d-flex justify-content-between">
                <h4 className="alert-heading">
                  <span className="align-middle">¡Algo ha salido mal!</span>
                </h4>
                <span
                  className="k-icon k-i-warning"
                  style={{ fontSize: 32 }}
                ></span>
              </div>
              <p>
                No es posible recuperar la información de tu vehículo en el
                momento
              </p>
              <hr />
              <div className="d-flex justify-content-between">
                <Button
                  look="flat"
                  onClick={() => history.push("/referenceSearch")}
                >
                  <strong>Informar a soporte</strong>
                </Button>
              </div>
            </div>
          )}
        </main>
      </div>
    </Fragment>
  );
};

export default withRouter(VehicleByPlateResult);
