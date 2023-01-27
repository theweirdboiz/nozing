import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as APIs from "@APIs";

export default createSlice({
  name: "home",
  initialState: {
    banner: [],
    loading: "idle",
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    fetchHomeData: (state) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state, action) => {
        state.loading = `loading`;
        console.log(1);
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.banner =
          action.payload.find((item) => item.sectionType === "banner").items ||
          null;
        state.loading = "idle";
        console.log(2);
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
