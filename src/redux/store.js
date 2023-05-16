import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import rocketReducer from './rockets/rocketSlice';

export default configureStore({
  reducer: {
    rockets: rocketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
});
