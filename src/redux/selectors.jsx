import { createSelector } from "@reduxjs/toolkit";

export const bannerSelector = (state) => state.explore.banner;

export const bannerRemainingSelector = createSelector(
  bannerSelector,
  (banner) => {
    return banner;
  }
);
