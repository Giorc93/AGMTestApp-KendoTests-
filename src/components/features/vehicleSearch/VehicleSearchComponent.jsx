import React, { useState } from "react";
import { withRouter } from "react-router-dom";
//TODO: Change plate/ref container and toggler (Tabs)
import ReferenceSearchComponent from "../referenceSearch/ReferenceSearchComponent";
import PlateSearchComponent from "../plateSearch/PlateSearchComponent";

const VehicleSearchComponent = () => {
  const [toggler, setToggler] = useState(true);
  var title = toggler ? "CONSULTA POR PLACA" : "CONSULTA POR REFERENCIA";
  var subtitle = toggler
    ? "Si no conoces el número de placa puedes intentar una busqueda por referencia"
    : "Si conoces el número de placa puedes realizar tu consulta por placa";

  const handleToggle = () => {
    setToggler(!toggler);
  };

  return <></>;
};

export default withRouter(VehicleSearchComponent);
