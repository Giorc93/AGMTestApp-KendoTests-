import { configureStore } from "@reduxjs/toolkit";

//importing Reducers
import getQuotationReducer from "../components/features/getQuotation/getQuotationSlice";
import getPlaceListReducer from "../components/features/getPlaceList/getPlaceListSlice";
import plateDataReducer from "../components/features/plateSearch/plateDataSlice";
import userDataReducer from "../components/features/userDataForm/userDataSlice";

export default configureStore({
  reducer: {
    quotationData: getQuotationReducer,
    placeData: getPlaceListReducer,
    plateData: plateDataReducer,
    userData: userDataReducer,
  },
});
