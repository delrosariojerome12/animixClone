import {createSlice} from "@reduxjs/toolkit";
import {getData} from "../fetch/fetchReducer";
const initialState = {
  fetchedSeasonAnime: [],
};
export const seasonNowSlice = createSlice({
  name: "seasonNow",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.fetchedSeasonAnime = action.payload[3].data;
    });
  },
});

export default seasonNowSlice.reducer;
