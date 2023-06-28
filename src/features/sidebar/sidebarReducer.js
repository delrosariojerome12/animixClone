import {createSlice} from "@reduxjs/toolkit";
import {getData} from "../fetch/fetchReducer";

const initialState = {
  fetchedYear: [],
  fetchedGenre: [],
  fetchedWeekly: [],
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      // state.fetchedYear = action.payload[1].data.map((data) => data.year);
      state.fetchedGenre = action.payload[1].data;
      state.fetchedWeekly = action.payload[2].data;
    });
  },
});

export default sidebarSlice.reducer;
