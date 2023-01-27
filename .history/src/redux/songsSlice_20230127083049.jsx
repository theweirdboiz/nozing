import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as APIs from "@APIs";

export default createSlice({
  name: "songs",
  initialState: {
    currentSongId: null,
    currentSongInfor: null,
    isPlaying: false,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    setCurrentSongId: (state, action) => {
      state.currentSongId = action.payload;
    },
    isPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
  // listen thunk actions
  extraReducers: (builder) => {
    builder
      .addCase(getInfoSong.pending, (state, action) => {})
      .addCase(getInfoSong.fulfilled, (state, action) => {
        state.currentSongInfor = action.payload;
      })
      .addCase(getInfoSong.rejected, (state, action) => {});
  },
});
// thunk actions creator
export const getInfoSong = createAsyncThunk("songs/fetchInfoSong", async () => {
  const response = await APIs.getInfoSong();
  console.log(response);
  // return response.data.data;
});
