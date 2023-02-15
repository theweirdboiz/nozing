import { configureStore } from "@reduxjs/toolkit";
import exploreSlice from "./exploreSlice";
import songsSlice from "./songsSlice";
import playlistSlice from "./playlistSlice";
import audioSlice from "./audioSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  version: 1,
  storage,
  stateReconciler: autoMergeLevel2,
};

const musicConfig = {
  key: "MUSIC",
  ...persistConfig,
  whitelist: [
    "currentSongId",
    "currentPlaylistId",
    "detailPlaylist",
    "recentSongs",
  ],
};

const store = configureStore({
  reducer: {
    explore: exploreSlice.reducer,
    songs: persistReducer(musicConfig, songsSlice.reducer),
    playlists: playlistSlice.reducer,
    songAudio: audioSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      customEntityAdapter.removeAll(state);
    });
  },
});

export default store;
