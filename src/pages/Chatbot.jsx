import React, { useState, useEffect, useRef } from "react";
import { BiMenu, BiMicrophone, BiX, BiSend, BiPlus } from "react-icons/bi";
import { useChatbot } from "../hooks/useChatbot";
import { useChatbotStore } from "../store/useChatbotStore";
import toast from "react-hot-toast";

const Chatbot = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [input, setInput] = useState("");
  const messages = useChatbotStore((s) => s.messages);
  const history = useChatbotStore((s) => s.history);
  const activeChat = useChatbotStore((s) => s.activeChat);
  const addChatToHistory = useChatbotStore((s) => s.addChatToHistory);
  const setActiveChat = useChatbotStore((s) => s.setActiveChat);
  const { mutate, isPending } = useChatbot();
  const messagesContainerRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      mutate({ message: input });
      setInput("");
    }
  };

  const handleNewChat = () => {
    if (messages.length > 1) {
      addChatToHistory();
      toast.success("New chat created!");
    } else {
      addChatToHistory();
    }
  };

  useEffect(() => {
    if (activeChat) {
      const chat = history.find((c) => c.id === activeChat);
      if (chat) {
        useChatbotStore.setState({ messages: chat.messages });
      }
    }
  }, [activeChat, history]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="relative w-full h-[90vh] px-4 py-4 flex gap-4 text-text-black bg-background">
      {/* HISTORY SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-sidebar shadow-xl p-4 z-20
          transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Close button */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
        >
          <BiX className="text-xl" />
        </button>

        <h2 className="text-xl font-bold mb-4 text-primary">Chat History</h2>

        <button
          className="flex items-center gap-2 bg-secondary-navbar text-white px-4 py-2 rounded-lg shadow mb-4 w-full"
          onClick={handleNewChat}
        >
          <BiPlus className="text-xl" />
          New Chat
        </button>

        <div className="flex flex-col gap-3 overflow-y-auto">
          {history.map((chat, index) => {
            const lastMessage = useChatbotStore
              .getState()
              .getLastMessage(chat.id);
            return (
              <div
                key={chat.id}
                className={`p-3 bg-gray-100 rounded-md shadow cursor-pointer transition-colors duration-200 ${
                  activeChat === chat.id
                    ? "bg-primary-light border-l-4 border-primary"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveChat(chat.id)}
              >
                <p className="font-bold text-text-primary">Chat #{index + 1}</p>
                <p className="text-sm truncate text-text-secondary">
                  {lastMessage ? lastMessage.text : "..."}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* OPEN SIDEBAR BUTTON */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="absolute left-3 top-3 bg-secondary-navbar px-3 py-2 rounded-lg shadow text-white"
      >
        <BiMenu className="text-xl" />
      </button>

      {/* CHAT MAIN AREA */}
      <div className="w-full max-w-[800px] mx-auto h-full bg-white rounded-xl shadow-lg p-6 flex flex-col">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Mindsy</h1>
          <p className="text-sm text-gray-600">Your safe space to talk.</p>
        </div>

        {/* Messages */}
        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto flex flex-col gap-5 px-4"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[75%] p-4 rounded-2xl shadow-md text-sm transition-all duration-300 ${
                msg.sender === "user"
                  ? "ml-auto bg-accent-1 text-black"
                  : "mr-auto bg-[#e6e3da] text-text-black"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {isPending && (
            <div className="mr-auto bg-gray-200 text-text-primary max-w-[75%] p-4 rounded-2xl shadow-md text-sm flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div className="mt-6 flex items-center gap-3">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-assessment-bg px-5 py-3 rounded-full shadow-inner border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          {/* Send button */}
          <button
            className="bg-secondary-navbar text-white p-4 rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
            onClick={handleSend}
            disabled={isPending}
          >
            <BiSend className="text-xl" />
          </button>

          {/* Voice button */}
          <button className="bg-secondary-navbar text-white p-4 rounded-full shadow-lg transition-transform duration-200 hover:scale-110">
            <BiMicrophone className="text-xl" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Chatbot;