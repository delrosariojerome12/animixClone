import {createSlice} from "@reduxjs/toolkit";
import {handleSearchAnime, getHomeData} from "../navbar/searchAnime";
import {handleChangeCategory} from "../categoryBtn/categoryReducer";
const initialState = {
  isHomeLoading: false,
};

export const homeReducer = createSlice({
  name: "home",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(handleSearchAnime.pending, (state) => {
        state.isHomeLoading = true;
      })
      .addCase(handleSearchAnime.fulfilled, (state) => {
        state.isHomeLoading = false;
      })
      .addCase(handleSearchAnime.rejected, (state) => {
        state.isError = true;
        state.isHomeLoading = false;
      });
    builder
      .addCase(getHomeData.pending, (state) => {
        state.isHomeLoading = true;
      })
      .addCase(getHomeData.fulfilled, (state) => {
        state.isHomeLoading = false;
      })
      .addCase(getHomeData.rejected, (state) => {
        state.isError = true;
        state.isHomeLoading = false;
      });
    builder
      .addCase(handleChangeCategory.pending, (state) => {
        state.isHomeLoading = true;
      })
      .addCase(handleChangeCategory.fulfilled, (state) => {
        state.isHomeLoading = false;
      })
      .addCase(handleChangeCategory.rejected, (state) => {
        state.isError = true;
        state.isHomeLoading = false;
      });
  },
});

export default homeReducer.reducer;
