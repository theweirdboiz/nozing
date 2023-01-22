import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@axios";
export const fetchHomeData = createAsyncThunk('home/fetchHomeData',async()=>{
  const respone = await 
})

export default createSlice({
  name: "home",
  initialState: [],
  reducers: {
    getHomeData: (state) => {
      return state;
    },
  },
});
