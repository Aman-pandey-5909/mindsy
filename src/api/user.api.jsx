import { api } from "./api.jsx";

export const getUser = async () => {
  const res = await api.get("/user/me");
  return res.data;
};

export const loginUser = async (data) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};
