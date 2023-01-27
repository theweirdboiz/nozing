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
  extraReducers: (builder) => {
    builder
      .addCase(getInfoSong.pending, (state, action) => {
        console.log(1);
      })
      .addCase(getInfoSong.fulfilled, (state, action) => {
        console.log(2);
      })
      .addCase(getInfoSong.rejected, (state, action) => {
        console.log(3);
      });
  },
});

export const getInfoSong = createAsyncThunk("songs/fetchInfoSong", async () => {
  const response = APIs.getInfoSong();
  console.log(response);
});
