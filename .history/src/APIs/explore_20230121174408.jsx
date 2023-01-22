import axios from "../axios";

export default getHome = () =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios({
        url: "/home",
        method: "get",
      });
      resolve(res);
    } catch (err) {
      reject(err);
    }
  });
