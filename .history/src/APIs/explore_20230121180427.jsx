import axios from "../axios";

export const getHome = () =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios({
        url: "https://api-zingmp3-vercel.vercel.app/home",
        method: "get",
      });
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });
