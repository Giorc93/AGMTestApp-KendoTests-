import { configureStore } from "@reduxjs/toolkit";

//importing Reducers
import getReferencesListReducer from "../components/features/getReferencesList/getReferencesListSlice";
import referenceDataReducer from "../components/features/referenceSearch/referenceDataSlice";
import documentDataReducer from "../components/features/documentDataForm/documentDataSlice";
import getBrandsListReducer from "../components/features/getBrandsList/getBrandsListSlice";
import getQuotationReducer from "../components/features/getQuotation/getQuotationSlice";
import getPlaceListReducer from "../components/features/getPlaceList/getPlaceListSlice";
import plateDataReducer from "../components/features/plateSearch/plateDataSlice";
import userDataReducer from "../components/features/userDataForm/userDataSlice";

export default configureStore({
  reducer: {
    referencesListData: getReferencesListReducer,
    referenceData: referenceDataReducer,
    quotationData: getQuotationReducer,
    documentData: documentDataReducer,
    brandsData: getBrandsListReducer,
    placeData: getPlaceListReducer,
    plateData: plateDataReducer,
    userData: userDataReducer,
  },
});
