import { create } from "zustand";

export const useChatbotStore = create((set) => ({
  messages: [],

  addUserMessage: (text) =>
    set((s) => ({
      messages: [...s.messages, { sender: "user", text }],
    })),

  addBotMessage: (text) =>
    set((s) => ({
      messages: [...s.messages, { sender: "bot", text }],
    })),
}));
