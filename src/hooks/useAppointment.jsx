import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAppointments, createAppointment } from "../api/appointment.api.jsx";
import { useAppointmentStore } from "../store/useAppointmentStore.jsx";

export const useAppointment = () => {
  const setAppointments = useAppointmentStore((s) => s.setAppointments);

  return useQuery({
    queryKey: ["appointments"],
    queryFn: getAppointments,
    onSuccess: (data) => setAppointments(data),
  });
};

export const useCreateAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries("appointments");
    },
  });
};
