import React, { useEffect } from "react";

import { withRouter, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, makeStyles } from "@material-ui/core";

import { selectPlateResponse } from "../plateSearch/plateDataSlice";
import { selectUserData } from "../userDataForm/userDataSlice";
import { getQuotation } from "./getQuotationSlice";

import MainContainer from "../../material/MainContainer";

const useStyles = makeStyles((theme) => ({}));

const GetQuotationComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const styles = useStyles();

  const getQuot = () => {
    dispatch(getQuotation(quotationData));
    console.log(userData.placeData.city);
  };

  useEffect(() => {
    console.log(plateResponseData.plate + "-" + plateResponseData.code);
  }, []);

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

  return (
    <MainContainer>
      <Button onClick={() => getQuot()}>Obtener Cotizacion</Button>
    </MainContainer>
  );
};

export default withRouter(GetQuotationComponent);

/*
    version: "1",
    data: {
      insurable_objects: [
        {
          //data / storeState / dataType
          identification:
            plateResponseData.plate + "-" + plateResponseData.code, //"plateNumber-fasecolda" / plateReponse / String
          price_sugested: plateResponseData.vehicle_risk.reference_price + "", //"sugestedprice" / plateResponse / String
          tag: plateResponseData.plate, //"plateNumber" / plateSearch / String
          vehicle: {
            brand: plateResponseData.brand, //"brand" / plateResponse / String
            //"{code:"fasecolda" / plateResponse / String , fuel: "*", / TODO: ? Form / String, nationality: "*" / TODO: form / String  }"
            codification: {
              code: plateResponseData.code,
              fuel: "*",
              nationality: "*",
            },
            cylinder: plateResponseData.cylinder, //"cyllinder" /plateResponse / String
            line: plateResponseData.line, //"line" / plateResponse / String
            model: plateResponseData.model, //"model" / plateResponse / Number
            number_passengers: plateResponseData.number_passengers, //"passangersNumber" / plateResponse / Number
            plate: plateResponseData.plate, //"plateNumber" / plateSearch / String
            type: plateResponseData.type, //"vehcleType" / plateResponse / String
            vehicle_risk: {
              accesories_price: 0, //"accesoriesPrice" / TODO: ? Form / Number
              in_agency: false, //"inAgency" / TODO: ? Form / Boolean
              plate_type: plateResponseData.vehicle_risk.plate_type, //"plateType" / plateResponse / String
              protection_type: "", //"proetectionType" / TODO: ? Form / String
              reference_price: plateResponseData.vehicle_risk.reference_price, //"sugestedPrice" / plateResponse / Number
              use_type: "particular", //"useType" / TODO: ? Form / String
            },
            weight: 0, //"weight" / Optional / Number
          },
        },
      ],
      parties: [
        {
          party_rol: "Asegurado", //"partyRol" / TODO: ? Form / String
          person: {
            birht_date: userData.birthDate, //"birthDate" / userData / String
            contact_data: [
              {
                contact_info: {
                  email: userData.email, //"email" / userData / String
                  ubication: {
                    address_line1: "Calle 15 # 15-16", //"addressLine" / TODO: ? Form / String
                    place: {
                      //"{placeData}" / placeResponse / Obj
                      city_code: userData.placeData.city_code,
                      city_name: userData.placeData.city_name,
                      country_code: userData.placeData.country_code,
                      country_name: userData.placeData.country_name,
                      state_code: userData.placeData.state_code,
                      state_name: userData.placeData.state_name,
                    },
                    postal_code: userData.placeData.code, //"postalCode" /  => conCatData* / Sring
                  },
                },
                contact_tag: "Email", //Default Val / Verify data with API resp.
              },
            ],
            educational_level: "primary", //"educartionLevel" / TODO: ? Form / String
            firstname: userData.firstName, //"firstName" / userData / String
            gender: userData.gender, //"gender" / +userData / String
            identification_number: userData.idNumber, //"idNumber" / userData / String
            identification_type: userData.idType, //"idType" / +userData / String
            lastname: userData.lastName, //"lastName" / +userData / String
            marital_status: "single", //"maritalStatus" / +userData / String
            profession: "Comerciante", //"profession" / +userData / String
          },
        },
      ],
      type: "all_risk_vehicle", //"riskType" / default / String
      ubication: {
        address_line1: "Calle 15 # 15-16", //"addressLine" / TODO: ? Form / String
        place: {
          //"{placeData}" / placeResponse / Obj
          city_code: userData.placeData.city_code,
          city_name: userData.placeData.city_name,
          country_code: userData.placeData.country_code,
          country_name: userData.placeData.country_name,
          state_code: userData.placeData.state_code,
          state_name: userData.placeData.state_name,
        },
        postal_code: userData.placeData.code, //"postalCode" /  => conCatData* / Sring
      },
    },
    name: "event-create-quote", // defaultEventName
    origin: "postman", // default / api.consume ? */
