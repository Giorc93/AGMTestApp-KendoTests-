import { configureStore } from "@reduxjs/toolkit";

//importing Reducers
import getPlaceListReducer from "../components/features/getPlaceList/getPlaceListSlice";
import plateDataReducer from "../components/features/plateSearch/plateDataSlice";
import userDataReducer from "../components/features/userDataForm/userDataSlice";
import testReducer from "../components/features/test/testReducer";

export default configureStore({
  reducer: {
    test: testReducer,
    plateData: plateDataReducer,
    userData: userDataReducer,
    placeData: getPlaceListReducer,
  },
});
