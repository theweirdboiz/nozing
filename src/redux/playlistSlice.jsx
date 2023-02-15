import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as APIs from "@APIs";

export default createSlice({
  name: "playlists",
  initialState: {
    id: null,
    isLoading: false,
    isPlaying: false,
    data: [],
  },
  reducers: {
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
  // listen thunk actions
  extraReducers: (builder) => {
    builder.addCase(fetchDetailPlaylist.fulfilled, (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
    });
  },
});
// thunk action creator
export const fetchDetailPlaylist = createAsyncThunk(
  "playlists/fetchDetailPlaylist",
  async (currentPlaylistId) => {
    const response = await APIs.getDetailPlaylist(currentPlaylistId);
    return response?.data?.data;
  }
);
