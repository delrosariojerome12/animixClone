import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const yearList = "https://api.jikan.moe/v4/seasons";

const initialState = {
  fetchedYear: [],
};

export const getYear = createAsyncThunk("year/getYear", async () => {
  const data = await fetch(yearList).then((res) => res.json());
  return data.data;
});

export const yearSlice = createSlice({
  name: "year",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getYear.fulfilled, (state, action) => {
      state.fetchedYear = action.payload.map((data) => data.year);
    });
  },
});

export default yearSlice.reducer;
