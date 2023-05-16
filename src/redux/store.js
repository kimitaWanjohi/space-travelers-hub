import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import missionsReducer from "./missions/slice";

export default configureStore({
  reducer: {
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
});
