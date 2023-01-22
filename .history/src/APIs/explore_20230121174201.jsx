import axios from "../axios";

export const getHome = () =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios({
        url: "/home",
      });
    } catch (err) {
      reject(err);
    }
  });
