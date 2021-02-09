import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  selectReferencesResponse,
  getReferencesList,
} from "../getReferencesList/getReferencesListSlice";

import {
  getVehicleDataByRef,
  resetVehicleDataState,
} from "./referenceDataSlice";

import {
  getBrandsList,
  selectBrandsResponse,
} from "../getBrandsList/getBrandsListSlice";
import { yupSchema } from "./referenceDataUtils";

const schema = yup.object().shape(yupSchema);

const ReferenceSearchComponent = () => {
  const dispatch = useDispatch();

  const referencesData = useSelector(selectReferencesResponse);

  const brandsData = useSelector(selectBrandsResponse);

  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const [vehicleData, setVehicleData] = useState({
    brand: undefined,
    model: undefined,
  });

  const setVehicleState = (data) => {
    switch (data.name) {
      case "brand":
        setVehicleData({ ...vehicleData, brand: data.value });
        break;
      case "model":
        setVehicleData({ ...vehicleData, model: data.value });
        break;
      default:
        setVehicleData(vehicleData);
    }
  };

  const onSubmit = (data) => {
    dispatch(getVehicleDataByRef(data));
  };

  const getRefList = () => {
    vehicleData.model !== undefined &&
      vehicleData.model !== "" &&
      vehicleData.model > 1900 &&
      dispatch(getReferencesList(vehicleData));
  };

  useEffect(() => {
    dispatch(getBrandsList());

    return () => {
      dispatch(resetVehicleDataState());
    };
  }, [dispatch]);

  return <></>;
};

export default withRouter(ReferenceSearchComponent);
