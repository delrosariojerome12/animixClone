import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {handleChangeCategory} from "../categoryBtn/categoryReducer";
import {handleSearchAnime, getHomeData} from "../navbar/searchAnime";

const topAnime = "https://api.jikan.moe/v4/top/anime?type=tv&limit=20";
const genreList = "https://api.jikan.moe/v4/genres/anime";
const weeklyTop =
  "https://api.jikan.moe/v4/top/anime?type=tv&filter=airing&limit=35";
const seasonNow = "https://api.jikan.moe/v4/seasons/now?limit=10";

const initialState = {
  fetchedData: [],
  hasNextPage: true,
  selectedLink: "https://api.jikan.moe/v4/top/anime?type=tv&limit=20",
  pagination: 1,
};
export const getData = createAsyncThunk("data/getData", async () => {
  const topAnimeReq = await axios.get(topAnime);
  const genreReq = await axios.get(genreList);
  const weeklyReq = await axios.get(weeklyTop);
  const seasonNowReq = await axios.get(seasonNow);
  return [topAnimeReq.data, genreReq.data, weeklyReq.data, seasonNowReq.data];
});

export const handleLoadMore = createAsyncThunk(
  "load/loadMore",
  async (arg, {getState}) => {
    try {
      const {fetchedData} = getState();
      return await fetch(
        `${fetchedData.selectedLink}&page=${fetchedData.pagination + 1}`
      ).then((res) => res.json());
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  }
);

export const fetchReducer = createSlice({
  name: "fetch",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get data
    builder.addCase(getData.fulfilled, (state, action) => {
      state.fetchedData = action.payload[0].data;
    });
    // load more data
    builder
      .addCase(handleLoadMore.fulfilled, (state, action) => {
        const list = [...state.fetchedData, ...action.payload.data];
        state.fetchedData = [
          ...list
            .reduce((map, obj) => map.set(obj.mal_id, obj), new Map())
            .values(),
        ];
        state.hasNextPage = action.payload.pagination.has_next_page;
        state.pagination += 1;
      })
      .addCase(handleLoadMore.rejected, (state) => {
        console.log("rejected");
      });
    // listen change category
    builder.addCase(handleChangeCategory.fulfilled, (state, action) => {
      state.fetchedData = action.payload.data.data;
      state.pagination = 1;
      state.selectedLink = action.payload.link;
    });
    // listen on searchs
    builder.addCase(handleSearchAnime.fulfilled, (state, action) => {
      const {
        data: {data, pagination},
        searchAnimeLink,
      } = action.payload;
      state.fetchedData = data;
      state.pagination = 1;
      state.selectedLink = searchAnimeLink;
      state.hasNextPage = pagination.has_next_page;
    });
    // listen on go home
    builder.addCase(getHomeData.fulfilled, (state, action) => {
      const {
        data: {data, pagination},
        searchAnimeLink,
      } = action.payload;
      state.fetchedData = data;
      state.pagination = 1;
      state.selectedLink = searchAnimeLink;
      state.hasNextPage = pagination.has_next_page;
    });
  },
});

// export const {} = fetchReducer.actions;

export default fetchReducer.reducer;
