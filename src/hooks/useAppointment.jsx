import { useQuery } from "@tanstack/react-query";
import { getAppointments } from "../api/appointment.api.jsx";
import { useAppointmentStore } from "../store/useAppointmentStore.jsx";

export const useAppointment = () => {
  const setAppointments = useAppointmentStore((s) => s.setAppointments);

  return useQuery({
    queryKey: ["appointments"],
    queryFn: getAppointments,
    onSuccess: (data) => setAppointments(data),
  });
};
