import { api } from "./api.jsx";

export const getDiaries = async () => {
  const res = await api.get("/diary");
  return res.data;
};

export const createDiary = async (text) => {
  const res = await api.post("/diary", { text });
  return res.data;
};
