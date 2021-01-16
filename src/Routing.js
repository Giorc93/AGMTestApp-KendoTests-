import React from "react";
import { Route, Switch } from "react-router-dom";

import VehicleByPlateResultComponent from "./components/features/vehicleByPlateResult/VehicleByPlateResultComponent";
import VehicleSearchComponent from "./components/features/vehicleSearch/VehicleSearchComponent";
import userDataFormComponent from "./components/features/userDataForm/UserDataFormComponent";
import ErrorComponent from "./components/features/error/ErrorComponent";
import HomeComponent from "./components/features/home/HomeComponent";
import TestComponent from "./components/features/test/TestComponent";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/home" component={HomeComponent} />
      <Route exact path="/test" component={TestComponent} />
      <Route exact path="/userDataForm" component={userDataFormComponent} />
      <Route exact path="/vehicleSearch" component={VehicleSearchComponent} />
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
