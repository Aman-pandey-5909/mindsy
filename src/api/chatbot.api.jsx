// api/chatbot.api.jsx 
import { api } from "./api";

export const sendToBot = async (message, audioFile = null) => {
  const formData = new FormData();

  // Required fields for FastAPI
  formData.append("model", "General");       // You can change this dynamically later
  formData.append("language", "en");         // or make language user-selectable
  formData.append("message", message);

  if (audioFile) {
    formData.append("audio_file", audioFile);
  }

  const res = await api.post("/chatbot", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "user-id": localStorage.getItem("mindsy-user-id") || "guest",
    },
  });

  return res.data;
};