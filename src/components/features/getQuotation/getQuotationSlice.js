import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getQuotation = createAsyncThunk(
  "quotation/getQuotation",
  async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "token",
      "6haubsz6iSyw2UsuvjRUVKYLDjarr_mgJnB5D2raug--Mos-XX6P3znAGItzz6CRFS7rDT2P-GmeidgS5pse1xszqcpCWRBmRRnNP_wLuhsFiin0EMVR8QIGlVHbMVmzvDxgFE4H9ug14FNRpYFfnjSDepBsp7z5lkgf5qYk1ZQtbfZ0auDbMo8N6ISni5wI7JWMg-AGD3_zarHh4um6Le1DFWPl39ZihEZTfogPL2av4nCf_Jat9VWzh4bQqVSouMZc_D9hNzHoMnrDR3w5R0lQ7PkQlQWyBzICLMiIvbEPzfg8oaI7If3tvgYe2ynhlPM-Go96HiO4scuey8jzuw.."
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      version: "1",
      data: {
        insurable_objects: [
          {
            //data / storeState / dataType
            identification: "mor190-01601216", //"plateNumber-fasecolda" / plateReponse / String
            price_sugested: "21500000", //"sugestedprice" / plateResponse / String
            tag: "mor190", //"plateNumber" / plateSearch / String
            vehicle: {
              brand: "CHEVROLET", //"brand" / plateResponse / String
              //"{code:"fasecolda" / plateResponse / String , fuel: "*", / TODO: ? Form / String, nationality: "*" / TODO: form / String  }"
              codification: { code: "01601216", fuel: "*", nationality: "*" },
              cylinder: "0", //"cyllinder" /plateResponse / String
              line: "AUTOMOVIL", //"vehcleType" / plateResponse / String
              model: 2010, //"model" / plateResponse / Number
              number_passengers: 0, //"passangersNumber" / plateResponse / Number
              plate: "mor190", //"plateNumber" / plateSearch / String
              type: "AUTOMOVIL", //"vehcleType" / plateResponse / String
              vehicle_risk: {
                accesories_price: 0, //"accesoriesPrice" / TODO: ? Form / Number
                in_agency: false, //"inAgency" / TODO: ? Form / Boolean
                plate_type: "particular", //"plateType" / plateResponse / String
                protection_type: "alarma", //"proetectionType" / TODO: ? Form / String
                reference_price: 21500000, //"sugestedPrice" / plateResponse / Number
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
              birht_date: "1987-03-09", //"birthDate" / userData / String
              contact_data: [
                {
                  contact_info: {
                    email: "seguro@agentemotor.com", //"email" / userData / String
                    ubication: {
                      address_line1: "Calle 15 # 15-16", //"addressLine" / TODO: ? Form / String
                      place: {
                        //"{placeData}" / placeResponse / Obj
                        city_code: "01",
                        city_name: "Cali",
                        country_code: "57",
                        country_name: "Colombia",
                        state_code: "05",
                        state_name: "Valle del cauca",
                      },
                      postal_code: "05001", //"postalCode" /  => conCatData* / Sring
                    },
                  },
                  contact_tag: "Email", //Default Val / Verify data with API resp.
                },
              ],
              educational_level: "primary", //"educartionLevel" / TODO: ? Form / String
              firstname: "Nataly ", //"firstName" / userData / String
              gender: "F", //"gender" / +userData / String
              identification_number: "1128444818", //"idNumber" / userData / String
              identification_type: "CC", //"idType" / +userData / String
              lastname: "Zapata Ospina", //"lastName" / +userData / String
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
            city_code: "01",
            city_name: "Cali",
            country_code: "57",
            country_name: "Colombia",
            state_code: "05",
            state_name: "Valle del cauca",
          },
          postal_code: "05001", //"postalCode" /  => conCatData* / Sring
        },
      },
      name: "event-create-quote", // defaultEventName
      origin: "api.consume", // default / api.consume ?
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return await fetch(
      "http://api.app.agentemotor.com/insurances/process/create",
      requestOptions
    ).then((response) => response.json());
  }
);

const getQuotationSlice = createSlice({
  name: "getQuotation",
  initialState: {
    quotationData: {
      data: [],
      status: "",
    },
  },
  extraReducers: {
    [getQuotation.pending]: (state, action) => {
      state.quotationData.status = "loading";
    },
    [getQuotation.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.quotationData.data = action.payload;
      state.quotationData.status = "success";
    },
    [getQuotation.rejected]: (state, action) => {
      state.quotationData.status = "failed";
    },
  },
});

//Exp. state value (useSelector)
export const selectQuotation = (state) => state.quotationData.quotationData;

export default getQuotationSlice.reducer;
