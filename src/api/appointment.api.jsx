import { api } from "./api.jsx";

export const getAppointments = async () => {
  const res = await api.get("/appointments");
  return res.data;
};

export const createAppointment = async (data) => {
  const res = await api.post("/appointments", data);
  return res.data;
};
