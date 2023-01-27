import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as APIs from "@APIs";

export default createSlice({
  name: "songs",
  initialState: {
    currentSongId: null,
    currentSong: null,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    setCurrentSongId: (state, action) => {
      state.currentSongId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInfoSong.pending, (state, action) => {})
      .addCase(getInfoSong.fulfilled, (state, action) => {
        state.currentSong = action.payload;
      })
      .addCase(getInfoSong.rejected, (state, action) => {});
  },
});

export const getInfoSong = createAsyncThunk("songs/fetchInfoSong", async () => {
  const response = await APIs.getInfoSong();
  return response.data.data;
});
