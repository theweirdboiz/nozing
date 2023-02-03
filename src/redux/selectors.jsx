import { createSelector } from "@reduxjs/toolkit";

export const bannerSelector = (state) => state.explore.banner;
export const homeDataSelector = (state) => state.explore;

export const currentSongSelector = (state) => state.songs.currentSong;
export const currentSongIdSelector = (state) => state.songs.currentSongId;
export const currentSongInforSelector = (state) => state.songs.currentSongInfor;
// export const songSelector = (state) => state.songs;
export const detailPlaylistSelector = (state) => state.songs.detailPlaylist;
export const isPlayingSelector = (state) => state.songs.isPlaying;
export const isVipSelector = async (state) => await state.songs.isVip;
export const isListSelector = (state) => state.songs.isList;

export const currentSongIndexSelector = (state) => state.songs.index;

export const isRepeatSelector = (state) => state.songs.isRepeat;

export const isRandomSelector = (state) => state.songs.isRandom;

export const isLoadedSelector = (state) => state.songs.isLoaded;
// export const bannerRemainingSelector = createSelector(
//   bannerSelector,
//   (banner) => {
//     return banner;
//   }
// );
