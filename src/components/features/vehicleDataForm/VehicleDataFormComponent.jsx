import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  getPlaceListByString,
  selectPlaceResponse,
} from "../getPlaceList/getPlaceListSlice";
import { saveVehicleData, savePlaceData } from "./vehicleDataSlice";
import { yupSchema } from "./userDataUtils";

const schema = yup.object().shape(yupSchema);

const VehicleDataFormComponent = () => {
  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const placeData = useSelector(selectPlaceResponse);

  const dispatch = useDispatch();

  //Exec. placeData fn to load full place obj.
  const handlePlaceChange = (placeData) => {
    dispatch(savePlaceData(placeData));
  };

  const onSubmit = (data) => {
    dispatch(saveVehicleData(data));
  };

  useEffect(() => {
    dispatch(getPlaceListByString());
  }, [dispatch]);

  return <></>;
};

export default withRouter(VehicleDataFormComponent);
