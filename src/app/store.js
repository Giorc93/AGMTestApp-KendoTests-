import { configureStore } from "@reduxjs/toolkit";

//importing Reducers
import referenceDataReducer from "../components/features/referenceSearch/referenceDataSlice";
import getQuotationReducer from "../components/features/getQuotation/getQuotationSlice";
import getPlaceListReducer from "../components/features/getPlaceList/getPlaceListSlice";
import plateDataReducer from "../components/features/plateSearch/plateDataSlice";
import userDataReducer from "../components/features/userDataForm/userDataSlice";

export default configureStore({
  reducer: {
    referenceData: referenceDataReducer,
    quotationData: getQuotationReducer,
    placeData: getPlaceListReducer,
    plateData: plateDataReducer,
    userData: userDataReducer,
  },
});
