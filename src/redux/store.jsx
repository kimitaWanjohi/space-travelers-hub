import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import missionsReducer from "./missions/slice";
import rocketReducer from './rockets/rocketSlice';

export default configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
});
