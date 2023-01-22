import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as APIs from "@APIs";

export default createSlice({
  name: "home",
  initialState: {
    entities: [],
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
        state.status = `loading`;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.status = "idle";
      });
  },
});

// thunk action creator
export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeData",
  async () => {
    const response = await APIs.getHome();
    return response.data.items;
  }
);

// home/fetchHomeData/pending
// home/fetchHomeData/fullfiled
// home/fetchHomeData/rejected
