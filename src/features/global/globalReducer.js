import {createSlice} from "@reduxjs/toolkit";
import {getData} from "../fetch/fetchReducer";

const initialState = {
  isLoading: true,
  isError: false,
};

export const globalReducer = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    handleLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    handleError: (state, action) => {
      state.isError = action;
    },
  },
  extraReducers: (builder) => {
    // onload fetch
    builder
      .addCase(getData.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getData.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
    // on home fetch
  },
});

export const {handleError, handleLoading} = globalReducer.actions;

export default globalReducer.reducer;
