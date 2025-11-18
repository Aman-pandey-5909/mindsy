import { api } from "./api.jsx";

export const sendToBot = async (message) => {
  const res = await api.post("/chatbot", { message });
  return res.data; // { reply: "..." }
};

