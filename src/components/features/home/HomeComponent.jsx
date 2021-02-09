import React, { Fragment } from "react";

import { Button } from "@progress/kendo-react-buttons";

import { withRouter, useHistory } from "react-router-dom";

const HomeComponent = () => {
  const history = useHistory();
  return (
    <Fragment>
      <div className="container-fluid mt-1">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col-sm-2 col-md-1">
                <span
                  className="k-icon k-i-calendar"
                  style={{ fontSize: 64 }}
                ></span>
              </div>
              <div className="col-sm-10 col-md-11">
                <h1 className="display-4">AGM Test App</h1>
              </div>
            </div>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              metus risus, finibus id rhoncus vel, commodo et risus. Donec
              gravida pharetra tellus ac fringilla. Ut vitae mi vestibulum mi
              blandit pretium. Curabitur ut leo eu est placerat vehicula et et
              lectus. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Nullam eu dui elementum, egestas
              elit vitae, suscipit purus. Nulla scelerisque dictum posuere.
              Aenean sed turpis lectus. Sed sollicitudin elementum aliquet.
              Morbi aliquet scelerisque nisl, a placerat tortor iaculis eget.
              Quisque nec sapien in tortor egestas maximus. Vestibulum interdum
              pellentesque tincidunt. Pellentesque non rhoncus lacus. Proin ac
              arcu dignissim, dapibus sem ut, accumsan lorem. Phasellus ut
              interdum libero, eu fermentum sem. Vivamus at felis quis orci
              pretium semper.
            </p>
            <div className="row">
              <div className="col d-flex justify-content-center mt-4">
                <Button
                  primary={true}
                  look="default"
                  style={{ height: 60, width: "50%", fontSize: 32 }}
                  onClick={() => history.push("/plateSearch")}
                >
                  Cotizar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(HomeComponent);
