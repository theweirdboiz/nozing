import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@axios";
import * as APIs from "@APIs";

export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeData",
  async () => {
    const response = await APIs.getHome();
    console.log(response);
    return respone;
  }
);

export default createSlice({
  name: "home",
  initialState: [],
  reducers: {
    getHomeData: (state) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state, action) => {
        state.status = `loading`;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        const newEntities = action.payload;
        state.status = "idle";
      });
  },
});
