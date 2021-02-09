import React, { useEffect } from "react";
//TODO: Check forwardRef
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  getPlaceListByString,
  selectPlaceResponse,
} from "../getPlaceList/getPlaceListSlice";
import { saveUserData, savePlaceData } from "./userDataSlice";
import { genderArr } from "../../utils/inputArrays";
import { yupSchema } from "./userDataUtils";

const schema = yup.object().shape(yupSchema);

const UserDataFormComponent = () => {
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
    dispatch(saveUserData(data));
  };

  useEffect(() => {
    dispatch(getPlaceListByString());
  }, [dispatch]);

  return <></>;
};

export default withRouter(UserDataFormComponent);

/*
<SelectInput
              options={idTypeArr}
              name="idType"
              ref={register}
              label="Tipo de Documento"
            />
*/
