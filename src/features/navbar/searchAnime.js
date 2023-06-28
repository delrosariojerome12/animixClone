import {createAsyncThunk} from "@reduxjs/toolkit";

export const handleSearchAnime = createAsyncThunk(
  "anime/searchAnime",
  async (anime) => {
    const searchAnimeLink = `https://api.jikan.moe/v4/anime?q=${anime}&order_by=score&min_score=1&limit=20`;
    const data = await fetch(searchAnimeLink).then((res) => res.json());
    return {data, searchAnimeLink};
  }
);

export const getHomeData = createAsyncThunk("anime/resetAnime", async () => {
  const searchAnimeLink = `https://api.jikan.moe/v4/top/anime?type=tv&limit=20`;
  const data = await fetch(searchAnimeLink).then((res) => res.json());
  return {data, searchAnimeLink};
});
