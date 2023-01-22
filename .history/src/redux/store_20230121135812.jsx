import { configureStore } from "@reduxjs/toolkit";
import { exploreSlice } from "@pages/Explore";

const store = configureStore({
  reducer: {
    explore: exploreSlice.reducer;
  },
});

export default store;
