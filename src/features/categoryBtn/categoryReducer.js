import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
const initialState = {
  categoryList: [
    {
      id: 1,
      category: "New eps",
      link: "https://api.jikan.moe/v4/top/anime?filter=airing&limit=20",
      isSelected: false,
    },
    {
      id: 2,
      category: "Top anime",
      link: "https://api.jikan.moe/v4/top/anime?type=tv&limit=20",
      isSelected: true,
    },
    {
      id: 3,
      category: "Recent",
      link: "https://api.jikan.moe/v4/top/anime?type=tv&filter=airing&limit=20",
      isSelected: false,
    },
    {
      id: 4,
      category: "Popular",
      link: "https://api.jikan.moe/v4/seasons/now?filter=bypopularity&limit=20",
      isSelected: false,
    },
    {
      id: 5,
      category: "Movie",
      link: "https://api.jikan.moe/v4/top/anime?type=movie&limit=20",
      isSelected: false,
    },
  ],
  isCategoryLoading: false,
  isCategoryError: false,
};
export const handleChangeCategory = createAsyncThunk(
  "category/changCategory",
  async (action, {getState}) => {
    try {
      const {link, id} = action;
      const {
        categoryReducer: {categoryList},
      } = getState();
      const updatedList = categoryList.map((categ) =>
        categ.id === id
          ? {...categ, isSelected: true}
          : {...categ, isSelected: false}
      );
      const data = await fetch(link).then((res) => res.json());

      return {data, updatedList, link};
    } catch (error) {
      console.error(error);
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // change category
    builder
      .addCase(handleChangeCategory.pending, (state, action) => {
        state.isCategoryLoading = true;
      })
      .addCase(handleChangeCategory.fulfilled, (state, action) => {
        state.isCategoryLoading = false;
        state.categoryList = action.payload.updatedList;
      })
      .addCase(handleChangeCategory.rejected, (state, action) => {
        state.isCategoryError = true;
        state.isCategoryLoading = false;
      });
    // search anime listen
  },
});

export default categorySlice.reducer;
