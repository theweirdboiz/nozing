import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@axios";
import * as APIs from "@APIs";

export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeData",
  async () => {
    const response = await APIs.getHome();
    console.log(response);
    return response;
  }
);

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
        state.entities.push(action.payload);
      });
  },
});
