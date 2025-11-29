import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const getInitialMessages = () => [
  {
    sender: "bot",
    text: "Hello! I'm Mindsy, your personal mental health companion. How can I help you today?",
  },
];

export const useChatbotStore = create((set, get) => ({
  messages: getInitialMessages(),
  history: [],
  activeChat: null,

  addUserMessage: (text) =>
    set((s) => ({
      messages: [...s.messages, { sender: "user", text }],
    })),

  addBotMessage: (text) =>
    set((s) => ({
      messages: [...s.messages, { sender: "bot", text }],
    })),

  clearMessages: () => set({ messages: getInitialMessages() }),

  addChatToHistory: () =>
    set((s) => {
      if (s.messages.length <= 1) return {};

      const newChat = { id: uuidv4(), messages: s.messages };
      return {
        history: [...s.history, newChat],
        activeChat: newChat.id,
        messages: getInitialMessages(),
      };
    }),

  setActiveChat: (id) =>
    set((s) => {
      const chat = s.history.find((c) => c.id === id);
      return { messages: chat ? chat.messages : getInitialMessages(), activeChat: id };
    }),

  // Correctly defined as a method on the store
  getLastMessage: (chatId) => {
    const { history } = get();
    const chat = history.find((c) => c.id === chatId);
    return chat && chat.messages.length > 0
      ? chat.messages[chat.messages.length - 1]
      : null;
  },
}));
