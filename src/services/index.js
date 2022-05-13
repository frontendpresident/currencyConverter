import axios from "axios";

export const getRates = async () => {
  return axios
    .get("https://cdn.cur.su/api/cbr.json")
    .then((response) => response.data);
};
