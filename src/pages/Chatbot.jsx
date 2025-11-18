import React, { useState } from "react";
import { BiMenu, BiMicrophone, BiX } from "react-icons/bi";

const Chatbot = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [messages, setMessages] = useState([
    { from: "bot", text: "Please choose your preferred language." },
    { from: "bot", text: "What is your concern today? (Stress, Anxiety, Mood…)" },
    { from: "user", text: "I think I'm feeling overwhelmed lately." },
    { from: "bot", text: "Thank you for sharing. Can you tell me more about it?" },
  ]);

  return (
    <div className="relative w-full h-[90vh] px-4 py-4 flex gap-4 text-text-black">

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

        <h2 className="text-xl font-bold mb-4">Chat History</h2>

        <div className="flex flex-col gap-3">
          <div className="p-3 bg-white rounded-md shadow">Chat #1</div>
          <div className="p-3 bg-white rounded-md shadow">Chat #2</div>
          <div className="p-3 bg-white rounded-md shadow">Chat #3</div>
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
      <div className="w-full max-w-[750px] mx-auto h-full bg-white rounded-xl shadow-md p-4 flex flex-col">
        
        {/* Heading (visible until many msgs) */}
        {messages.length <= 5 && (
          <div className="text-center mb-4">
            <h1 className="text-2xl font-semibold">Mindsy Chatbot</h1>
            <p className="text-gray-600 text-sm">Your safe space to talk.</p>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto flex flex-col gap-4 px-2">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[70%] p-3 rounded-xl shadow text-sm ${
                msg.from === "user"
                  ? "ml-auto bg-accent-1 text-text-black"
                  : "mr-auto bg-[#E6E3DA] text-text-black"
              }`}
            >
              {msg.text}
            </div>
          ))}

        </div>

        {/* Input bar */}
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-assessment-bg px-4 py-2 rounded-xl shadow border outline-none"
          />

          {/* Voice button */}
          <button className="bg-secondary-navbar text-white p-3 rounded-xl shadow">
            <BiMicrophone className="text-xl" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Chatbot;