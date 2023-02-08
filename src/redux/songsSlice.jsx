import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as APIs from "@APIs";

export default createSlice({
  name: "songs",
  initialState: {
    currentSong: null,
    currentSongId: null,
    currentSongInfor: null,
    detailPlaylist: null,
    currentPlaylistId: null,
    recentSongs: [],
    isPlaying: false,
    isVip: false,
    index: null,
    isRepeat: false,
    isRandom: false,
    isLoaded: false,
    isQueue: true,
    searchData: null,
    searchKeyword: null,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    setCurrentSongId: (state, action) => {
      state.currentSongId = action.payload;
    },
    setCurrentPlaylistId: (state, action) => {
      state.currentPlaylistId = action.payload;
    },
    setDetailPlaylist: (state, action) => {
      state.detailPlaylist = action.payload;
    },
    setRecentSongs: (state, action) => {
      if (
        state.recentSongs.every(
          (song) => song?.songId !== action.payload?.songId
        )
      ) {
        state.recentSongs = [action.payload, ...state.recentSongs];
      }
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
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
    setIsQueue: (state, action) => {
      state.isQueue = action.payload;
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
      })
      .addCase(fetchSearchData.fulfilled, (state, action) => {
        state.searchData = action.payload;
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
    return [res1?.data, res2?.data];
  }
);
export const fetchSearchData = createAsyncThunk(
  "songs/fetchSearchData",
  async (keyword) => {
    const response = await APIs.getSearchData(keyword);
    return response?.data?.data;
  }
);
