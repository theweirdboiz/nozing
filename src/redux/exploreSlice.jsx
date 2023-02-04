import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as APIs from "@APIs";

export default createSlice({
  name: "home",
  initialState: {
    banner: [],
    autoTheme1: {},
    artistTheme: {},
    autoTheme2: {},
    top100: {},
    album: {},
    newRelease: {},
    weekChart: [],
    chart: {},
    rank: [],
    loading: "idle",
  },
  reducers: {},
  // listen thunk actions
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state, action) => {
        state.loading = `loading`;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.banner =
          action.payload.find((item) => item.sectionId === "hSlider")?.items ||
          null;
        state.autoTheme1 =
          action.payload.find((item) => item.sectionId === "hAutoTheme1") || {};
        state.artistTheme =
          action.payload.find((item) => item.sectionId === "hArtistTheme") ||
          {};
        state.autoTheme2 =
          action.payload.find((item) => item.sectionId === "hAutoTheme2") || {};
        state.top100 =
          action.payload.find((item) => item.sectionId === "h100") || {};
        state.album =
          action.payload.find((item) => item.sectionId === "hAlbum") || {};
        state.newRelease =
          action.payload.find((item) => item.sectionType === "new-release") ||
          {};
        state.weekChart =
          action.payload.find((item) => item.sectionType === "weekChart")
            ?.items || [];
        state.chart =
          action.payload.find((item) => item.sectionId === "hZC")?.chart || {};
        state.rank =
          action.payload.find((item) => item.sectionId === "hZC")?.items || [];
        state.loading = "idle";
      });
  },
});

// thunk action creator
export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeData",
  async () => {
    const response = await APIs.getHome();
    return response.data.data.items;
  }
);
