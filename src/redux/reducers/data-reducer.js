import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updated: false,
  loading: true,
  error: {
    status: false,
    message: "",
  },
  themeDark: false,
  themeColor: "red",
  characters: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.characters = [];
      const d = new Date();
      state.updated = d.toLocaleString();
    },
    stopLoading: (state) => {
      state.loading = false;
      const d = new Date();
      state.updated = d.toLocaleString();
    },
    catchError: (state, action) => {
      state.error.status = true;
      state.error.message = action.payload;
      state.characters = [];
      const d = new Date();
      state.updated = d.toLocaleString();
    },
    cleanError: (state) => {
      state.error.status = false;
      state.error.message = "";
      const d = new Date();
      state.updated = d.toLocaleString();
    },
    saveData: (state, action) => {
      state.characters = action.payload;
      const d = new Date();
      state.updated = d.toLocaleString();
    },
    saveCharacter: (state, action) => {
      state.characters.push(action.payload);
      const d = new Date();
      state.updated = d.toLocaleString();
    },
    editCharacter: {
      reducer: (state, action) => {
        const { id, edit } = action.payload;
        const element = state.characters.find((el) => el.id === id);
        if (element) {
          Object.assign(element, edit);
        }
        state.characters = state.characters.filter(
          (el) => el.id !== action.payload.id
        );
        state.characters.push(element);
        const d = new Date();
        state.updated = d.toLocaleString();
      },
      prepare: (id, edit) => ({ payload: { id, edit } }),
    },
    deleteCharacter: (state, action) => {
      state.characters = state.characters.filter(
        (el) => el.id !== action.payload
      );
      const d = new Date();
      state.updated = d.toLocaleString();
    },
    setThemeLight: (state) => {
      state.themeDark = false;
      const d = new Date();
      state.updated = d.toLocaleString();
    },
    setThemeDark: (state) => {
      state.themeDark = true;
      const d = new Date();
      state.updated = d.toLocaleString();
    },
    setThemeColor: (state, action) => {
      state.themeColor = action.payload;
      const d = new Date();
      state.updated = d.toLocaleString();
    },
  },
});

const {
  startLoading,
  stopLoading,
  catchError,
  cleanError,
  saveData,
  saveCharacter,
  editCharacter,
  deleteCharacter,
  setThemeLight,
  setThemeDark,
  setThemeColor,
} = dataSlice.actions;
const { reducer } = dataSlice;

export {
  startLoading,
  stopLoading,
  catchError,
  cleanError,
  saveData,
  saveCharacter,
  editCharacter,
  deleteCharacter,
  setThemeLight,
  setThemeDark,
  setThemeColor,
};

export default reducer;
