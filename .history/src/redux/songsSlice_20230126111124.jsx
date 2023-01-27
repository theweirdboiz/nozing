import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as APIs from "@APIs";

export default createSlice({
  name: "songs",
  initialState: {
    currentSongId: null,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    setCurrentSongId: (state, action) => {
      state.currentSongId = action.payload;
    },
  },
});

export const getInfoSong = createAsyncThunk("songs/fetchInfoSong", async () => {
  const response = APIs.getInfoSong();
  console.log(response);
});
