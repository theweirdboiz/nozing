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
    // fetchHomeData: (state) => {
    //   console.log(state);
    //   return state;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state, action) => {
        state.loading = `loading`;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.banner =
          action.payload.find((item) => item.sectionType === "banner").items ||
          null;
        state.loading = "idle";
      });
  },
});

// thunk action creator
export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeData",
  async () => {
    console.log(123);
    const response = await APIs.getHome();
    return response.data.data.items;
  }
);
