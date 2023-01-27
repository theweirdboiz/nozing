import { createSelector } from "@reduxjs/toolkit";

export const bannerSelector = (state) => state.explore.banner;
export const currentSongSelector = (state) => state.songs.currentSongId;
export const currentSongInforSelector = (state) => state.songs.currentSongInfor;
export const songSelector = (state) => state.songs;
export const detailPlaylistSelector = (state) => state.songs.detailPlaylist;

export const bannerRemainingSelector = createSelector(
  bannerSelector,
  (banner) => {
    return banner;
  }
);
