import { api } from "./api.jsx";

export const getPsychiatrists = async () => {
  const res = await api.get("/psychiatrists");
  return res.data;
};
