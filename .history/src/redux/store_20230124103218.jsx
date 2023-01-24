import { configureStore } from "@reduxjs/toolkit";
import exploreSlice from "./exploreSlice";
import songsSlice from "./songsSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const persistConfig = {
  storage: storage,
  StateReconciler: autoMergeLevel2,
};

const musicConfig = {
  ...persistConfig,
  key: "MUSIC",
  whilelist: ["currentSongId"],
};

const store = configureStore({
  reducer: {
    explore: exploreSlice.reducer,
    songs: persistReducer(musicConfig, songsSlice.reducer),
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
});
export const persistor = persistStore(store);

export default store;
