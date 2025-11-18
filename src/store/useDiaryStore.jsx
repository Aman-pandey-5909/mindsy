import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDiaryStore = create(
  persist(
    (set) => ({
      entries: [],

      addEntry: (entry) =>
        set((state) => ({
          entries: [...state.entries, entry],
        })),

      updateEntry: (date, newText) =>
        set((state) => ({
          entries: state.entries.map((e) =>
            e.date === date ? { ...e, text: newText } : e
          ),
        })),

      deleteEntry: (date) =>
        set((state) => ({
          entries: state.entries.filter((e) => e.date !== date),
        })),
    }),
    { name: "diary-storage" }
  )
);