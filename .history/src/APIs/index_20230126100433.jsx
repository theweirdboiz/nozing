import axios from "../axios";

export const getSongDetail = (currentSongId) =>
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
