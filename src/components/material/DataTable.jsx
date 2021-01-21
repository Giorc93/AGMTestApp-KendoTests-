import React, { forwardRef, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

const DataTable = forwardRef((props, ref) => {
  const [rows, setRows] = useState([]);
  var dataArr = [];
  const loadRows = () => {
    props.data.map((elm) =>
      dataArr.push({
        id: elm.vehicle.code,
        brand: elm.vehicle.brand,
        line: elm.vehicle.line,
        model: elm.vehicle.model,
      })
    );
    setRows(dataArr);
  };

  const columns = [
    { field: "id", headerName: "Code", width: 130 },
    { field: "brand", headerName: "Brand", width: 130 },
    { field: "line", headerName: "Reference", width: 130 },
    { field: "model", headerName: "Model", type: "number", width: 130 },
  ];

  return (
    <>
      <Button onClick={() => loadRows()}>Load Data</Button>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </>
  );
});

export default DataTable;

/*
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
*/
