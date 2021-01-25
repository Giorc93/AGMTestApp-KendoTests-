import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import React from "react";

import { selectRefResponse } from "../features/referenceSearch/referenceDataSlice";
import CardC from "./CardC";

const CarCards = () => {
  const refResponse = useSelector(selectRefResponse);
  const refResponseData = refResponse.data.length > 0 ? refResponse.data : [];

  return (
    <Grid container spacing={2}>
      {refResponseData.length > 0 &&
        refResponseData.map((element, i) => (
          <Grid container item xs={12} md={6} lg={4} justify="center">
            <CardC key={element.vehicle.code} vehData={element.vehicle} />
          </Grid>
        ))}
    </Grid>
  );
};

export default CarCards;

/*

import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

{
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },


  <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection={false}
        />
      </div>



      const rows = [];
  
 
  refResponseData.map((elm) =>
    rows.push({
      id: elm.vehicle.code,
      brand: elm.vehicle.brand,
      line:
        elm.vehicle.codification.line1 +
        " " +
        elm.vehicle.codification.line2 +
        " " +
        elm.vehicle.codification.line3,
      model: elm.vehicle.model,
    })
  );

  const columns = [
    { field: "id", headerName: "Cod. Fasecolda", width: 170 },
    { field: "brand", headerName: "Marca", width: 160 },
    { field: "line", headerName: "Referencia", width: 320 },
    { field: "model", headerName: "Modelo", type: "number", width: 150 },
  ];
*/
