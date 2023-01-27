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
export const getSongInfo = (currentSongId) =>
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
