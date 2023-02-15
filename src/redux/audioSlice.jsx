import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as APIs from "@APIs";

const audio = new Audio();
export default createSlice({
  name: "songAudio",
  initialState: {
    audioElement: null,
    isPlaying: false,
    isPausing: true,
    isLoading: false,
  },
  reducers: {
    setSrc: (state, action) => {
      state.audioElement = new Audio(action.payload);
    },
  },
  // listen thunk actions
  extraReducers: (builder) => {},
});

// thunk action creator
