import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export default createSlice({
  name: "songs",
  initialState: {
    currentSongId: null,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
});
