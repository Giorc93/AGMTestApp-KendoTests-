import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "test",
  initialState: {
    value: 1,
  },
  reducers: {
    add: (state) => {
      state.value += 1;
    },
  },
});

export const { add } = testSlice.actions;

export const selectTest = (state) => state.test.value;

export default testSlice.reducer;

message: "No valid results for oneOf {↵ 0: Additional properties not allowed: insurable_objects at #->$ref[#/definitions/event]->properties:data->oneOf[0]->$ref[#/definitions/insurable_object]↵ 1: String expected, null received at #->$ref[#/definitions/event]->properties:data->oneOf[1]->$ref[#/definitions/risk]->properties:insurable_objects->items[0]:0->$ref[#/definitions/insurable_object]->properties:vehicle->$ref[#/definitions/vehicle]->properties:vehicle_risk->$ref[#/definitions/ModulesInsurancesHttpControllersSchemasVehicleVehicleRisk]->properties:protection_type↵ 2: Additional properties not allowed: insurable_objects at #->$ref[#/definitions/event]->properties:data->oneOf[2]->$ref[#/definitions/party]↵ 3: Additional properties not allowed: insurable_objects at #->$ref[#/definitions/event]->properties:data->oneOf[3]->$ref[#/definitions/api_events_vehicle]↵ 4: Additional properties not allowed: insurable_objects at #->$ref[#/definitions/event]->properties:data->oneOf[4]->$ref[#/definitions/insurance_policy]↵ 5: Additional properties not allowed: insurable_objects at #->$ref[#/definitions/event]->properties:data->oneOf[5]->$ref[#/definitions/place]↵} at #->$ref[#/definitions/event]->properties:data";
