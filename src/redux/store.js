import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducers/data-reducer";
import {localStorageMiddleware, loadStateFromLocalStorage} from "../utils/helpers"

const preloadedState = loadStateFromLocalStorage();

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  preloadedState: preloadedState,
  middleware: [localStorageMiddleware],
});

export { store };
