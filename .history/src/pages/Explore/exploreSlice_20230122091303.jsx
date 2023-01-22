import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@axios";
import * as APIs from "@APIs";

export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeData",
  async () => {
    const respone = await APIs.getHome();
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
});
