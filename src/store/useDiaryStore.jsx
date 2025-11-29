import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDiaryStore = create(
  persist(
    (set) => ({
      entries: [],
      setEntries: (entries) => set({ entries }),
    }),
    { name: "diary-storage" }
  )
);