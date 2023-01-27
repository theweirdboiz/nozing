import axios from "../axios";

export const getHome = () =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios({
        url: "/home",
        method: "get",
      });
      resolve(res);
      console.log("1");
    } catch (err) {
      console.log("?");
      reject(err);
    }
  });
