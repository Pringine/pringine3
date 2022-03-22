import axios from "axios";

const base = "http://localhost:8000/";

export const getList = async (url) => {
  const { data } = await axios.get(`${base}${url}`);
  return data;
};
