
"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (message.trim() === "") return;

    const userMessage = message;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage,
          }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          text: userMessage,
          sender: "user",
        },
        {
          text: data.reply,
          sender: "bot",
        },
      ]);

      setMessage("");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 text-xl font-bold shadow">
        🤖 AI Chat Bot
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 rounded-xl mb-4 shadow-lg">
          <h2 className="text-2xl font-bold mb-3">
            Welcome to AI ChatBot 🚀
          </h2>

          <p className="mb-3">I can answer questions related to:</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "AI",
              "Machine Learning",
              "React",
              "JavaScript",
              "Node.js",
              "HTML",
              "CSS",
              "Time",
              "Date",
              "Jokes",
            ].map((item) => (
              <span
                key={item}
                className="bg-white text-black px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="bg-white text-black p-3 rounded-lg">
            <p className="font-semibold">Examples:</p>
            <p className="text-sm mt-2">
              • What is AI? <br />
              • What is Machine Learning? <br />
              • What is React? <br />
              • Tell me a joke <br />
              • What time is it? <br />
              • What is JavaScript?
            </p>
          </div>
        </div>

        {/* Messages */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg w-fit mb-3 max-w-xs ${
              msg.sender === "user"
                ? "bg-blue-600 text-white ml-auto"
                : "bg-white text-black shadow"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            className="flex-1 border p-2 rounded text-black outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}