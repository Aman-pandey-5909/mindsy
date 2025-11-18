import { useMutation } from "@tanstack/react-query";
import { sendToBot } from "../api/chatbot.api.jsx";
import { useChatbotStore } from "../store/useChatbotStore.jsx";

export const useChatbot = () => {
  const addUser = useChatbotStore((s) => s.addUserMessage);
  const addBot = useChatbotStore((s) => s.addBotMessage);

  return useMutation({
    mutationFn: ({ message }) => sendToBot(message),
    onMutate: ({ message }) => addUser(message),
    onSuccess: (data) => addBot(data.reply),
  });
};
