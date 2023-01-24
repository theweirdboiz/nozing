import { configureStore } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const persistConfig = {
  storage: storage,
  StateReconciler: autoMergeLevel2,
};

const store = configureStore({
  reducer: {
    explore: exploreSlice.reducer,
    songs: songsSlice.reducer,
  },
});

export default store;
