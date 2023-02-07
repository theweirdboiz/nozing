import axios from "../axios";

export const getSong = (currentSongId) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios({
        url: "/song",
        method: "get",
        params: { id: currentSongId },
      });
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });

export const getInfoSong = (currentSongId) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios({
        url: "/infosong",
        method: "get",
        params: { id: currentSongId },
      });
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });
export const getDetailPlaylist = (playlistId) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios({
        url: "/detailPlaylist",
        method: "get",
        params: { id: playlistId },
      });
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });
export const getSearchData = (keyword) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios({
        url: "/search",
        method: "get",
        params: { keyword },
      });
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });
