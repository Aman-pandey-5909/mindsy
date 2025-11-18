import { create } from "zustand";

export const useAppointmentStore = create((set) => ({
  appointments: [],

  setAppointments: (arr) => set({ appointments: arr }),
  addAppointment: (apt) =>
    set((state) => ({ appointments: [...state.appointments, apt] })),
}));
