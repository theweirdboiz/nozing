import { createSelector } from "@reduxjs/toolkit";

export const bannerSelector = (state) => state.explore.banner;
export const currentSongSelector = (state) => state.songs.currentSongId;
export const currentSongInfoSelector = (state) => state.songs.currentSongInfo;
console.log(currentSongInfoSelector);
export const songSelector = (state) => state.songs;

export const bannerRemainingSelector = createSelector(
  bannerSelector,
  (banner) => {
    return banner;
  }
);
