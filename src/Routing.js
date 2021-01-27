import React from "react";
import { Route, Switch } from "react-router-dom";

import VehicleByPlateResultComponent from "./components/features/vehicleByPlateResult/VehicleByPlateResultComponent";
import DocumentDataFormComponent from "./components/features/documentDataForm/DocumentDataFormComponent";
import VehicleSearchComponent from "./components/features/vehicleSearch/VehicleSearchComponent";
import UserDataFormComponent from "./components/features/userDataForm/UserDataFormComponent";
import GetQuotationComponent from "./components/features/getQuotation/GetQuotationComponent";
import ErrorComponent from "./components/features/error/ErrorComponent";
import HomeComponent from "./components/features/home/HomeComponent";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/home" component={HomeComponent} />
      <Route exact path="/userDataForm" component={UserDataFormComponent} />
      <Route exact path="/getQuotation" component={GetQuotationComponent} />
      <Route exact path="/vehicleSearch" component={VehicleSearchComponent} />
      <Route
        exact
        path="/documentDataForm"
        component={DocumentDataFormComponent}
      />

      <Route
        exact
        path="/vehicleByPlateResult"
        component={VehicleByPlateResultComponent}
      />
      <Route exact path="*" component={ErrorComponent} />
    </Switch>
  );
};

export default Routing;
