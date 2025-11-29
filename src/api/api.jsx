import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-737904740808.asia-south1.run.app/api",
  withCredentials: true,
});
