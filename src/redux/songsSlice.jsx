import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as APIs from "@APIs";
import { useDispatch } from "react-redux";

export default createSlice({
  name: "songs",
  initialState: {
    currentSong: null,
    currentSongId: null,
    currentSongInfor: null,
    detailPlaylist: null,
    isPlaying: false,
    isVip: false,
    index: null,
    isRepeat: false,
    isRandom: false,
    isLoaded: false,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    setCurrentSongId: (state, action) => {
      state.currentSongId = action.payload;
    },
    isPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    isVip: (state, action) => {
      state.isVip = action.payload;
    },
    setIsList: (state, action) => {
      state.isList = action.payload;
    },
    setIndex: (state, action) => {
      state.index = action.payload;
    },
    setIsRepeat: (state, action) => {
      state.isRepeat = action.payload;
    },
    setIsRandom: (state, action) => {
      state.isRandom = action.payload;
    },
    setIsLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
  // listen thunk actions
  extraReducers: (builder) => {
    builder
      .addCase(getSong.fulfilled, (state, action) => {
        state.currentSong = action.payload;
      })
      .addCase(getInfoSong.fulfilled, (state, action) => {
        state.currentSongInfor = action.payload;
      })
      .addCase(getDetailPlaylist.fulfilled, (state, action) => {
        state.detailPlaylist = action.payload;
      })
      .addCase(fetchDetailSong.fulfilled, (state, action) => {
        const [res1, res2] = action.payload;
        if (res1.err === 0) {
          state.currentSong = res1?.data;
        }
        if (res2.err === 0) {
          state.currentSongInfor = res2?.data;
        }
        if (res1.err !== 0) {
          state.isPlaying = false;
        }
      });
  },
});
// thunk actions creator
export const getInfoSong = createAsyncThunk(
  "songs/fetchInfoSong",
  async (currentSongId) => {
    const response = await APIs.getInfoSong(currentSongId);
    return response?.data?.data;
  }
);

export const getSong = createAsyncThunk(
  "songs/fetchSong",
  async (currentSongId) => {
    const response = await APIs.getSong(currentSongId);
    return response?.data?.data;
  }
);

export const getDetailPlaylist = createAsyncThunk(
  "songs/fetchDetailPlaylist",
  async (currentPlaylistId) => {
    const response = await APIs.getDetailPlaylist(currentPlaylistId);
    return response?.data?.data;
  }
);
export const fetchDetailSong = createAsyncThunk(
  "songs/fetchDetailSong",
  async (currentSongId) => {
    const [res1, res2] = await Promise.all([
      APIs.getSong(currentSongId),
      APIs.getInfoSong(currentSongId),
    ]);
    return [res1.data, res2.data];
  }
);
