import { configureStore } from "@reduxjs/toolkit";
import exploreSlice from "./exploreSlice";
import songsSlice from "./songsSlice";
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
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};

const reducers = combineReducers({
  explore: exploreSlice.reducer,
  songs: songsSlice.reducer,
});

const musicConfig = {
  key: "MUSIC",
  ...persistConfig,
  whilelist: ["currentSongId"],
};
const persistedReducer = persistReducer(musicConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
