import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export default createSlice({
  name: "player",
  initialState: {
    src: "",
    isPlaying: false,
    isPausing: true,
    isLoading: false,
    volumeValue: 0.75,
  },
  reducers: {
    setSrc: (state, action) => {
      state.src = action.payload;
    },
  },
  // listen thunk actions
  extraReducers: (builder) => {},
});

// thunk action creator
