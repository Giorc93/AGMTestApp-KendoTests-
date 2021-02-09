import React from "react";

import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectPlateResponse } from "../plateSearch/plateDataSlice";
import { selectUserData } from "../userDataForm/userDataSlice";
import { getQuotation } from "./getQuotationSlice";

const GetQuotationComponent = () => {
  const dispatch = useDispatch();

  const getQuot = () => {
    dispatch(getQuotation(quotationData));
    console.log(userData.placeData.city);
  };

  const userDataSelector = useSelector(selectUserData);
  const userData = userDataSelector.userData;
  const plateResponse = useSelector(selectPlateResponse);
  const plateResponseData =
    plateResponse.status === "success" ? plateResponse.data[0].vehicle : null;
  const quotationData = {
    version: "1",
    data: {
      insurable_objects: [
        {
          identification:
            plateResponseData.plate + "-" + plateResponseData.code,
          price_sugested: plateResponseData.vehicle_risk.reference_price + "",
          tag: plateResponseData.plate,
          vehicle: {
            brand: plateResponseData.brand,
            codification: {
              code: plateResponseData.code,
              fuel: "*",
              nationality: "*",
            },
            cylinder: plateResponseData.cylinder,
            line: plateResponseData.line,
            model: plateResponseData.model,
            number_passengers: plateResponseData.number_passengers,
            plate: plateResponseData.plate,
            type: plateResponseData.type,
            vehicle_risk: {
              accesories_price: 0,
              in_agency: false,
              plate_type: plateResponseData.vehicle_risk.plate_type,
              protection_type: "alarma",
              reference_price: plateResponseData.vehicle_risk.reference_price,
              use_type: "particular",
            },
            weight: 0,
          },
        },
      ],
      parties: [
        {
          party_rol: "Asegurado",
          person: {
            birht_date: userData.birthDate,
            contact_data: [
              {
                contact_info: {
                  email: userData.email,
                  ubication: {
                    address_line1: "Calle 15 # 15-16",
                    place: {
                      city_code: userData.placeData.city_code,
                      city_name: userData.placeData.city_name,
                      country_code: userData.placeData.country_code,
                      country_name: userData.placeData.country_name,
                      state_code: userData.placeData.state_code,
                      state_name: userData.placeData.state_name,
                    },
                    postal_code: userData.placeData.code,
                  },
                },
                contact_tag: "Email",
              },
            ],
            educational_level: "primary",
            firstname: userData.firstName,
            gender: userData.gender,
            identification_number: userData.idNumber,
            identification_type: userData.idType,
            lastname: userData.lastName,
            marital_status: "single",
            profession: "Comerciante",
          },
        },
      ],
      type: "all_risk_vehicle",
      ubication: {
        address_line1: "Calle 15 # 15-16",
        place: {
          city_code: userData.placeData.city_code,
          city_name: userData.placeData.city_name,
          country_code: userData.placeData.country_code,
          country_name: userData.placeData.country_name,
          state_code: userData.placeData.state_code,
          state_name: userData.placeData.state_name,
        },
        postal_code: userData.placeData.code,
      },
    },
    name: "event-create-quote",
    origin: "postman",
  };

  return <></>;
};

export default withRouter(GetQuotationComponent);
