"use client";

import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import useWebSocket from "./hooks/useAgent";

export default function Home() {
  const [input, setInput] = useState("");
  // const { messages, sendMessage, isThinking } = useAgent();

  const { messages, sendMessage } = useWebSocket("ws://localhost:8080");


  // Ref for the messages container
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto-scroll whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const onSendMessage = async () => {
    if (!input.trim()) return;
    const message = input;
    setInput("");
    await sendMessage(message);
  };

  return (
    <div className="flex flex-col flex-grow items-center justify-center text-black dark:text-white w-full h-full">
      <div className="w-full max-w-2xl h-[70vh] bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col">
        {/* Chat Messages */}
        <div className="flex-grow overflow-y-auto space-y-3 p-2">
          {messages.length === 0 ? (
            <p className="text-center text-gray-500">Start chatting with AgentKit...</p>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-2xl shadow ${msg.sender === "user"
                    ? "bg-[#0052FF] text-white self-end"
                    : "bg-gray-100 dark:bg-gray-700 self-start"
                  }`}
              >
                <ReactMarkdown components={{
                  a: ({ node, ...props }) => (
                    <a
                      {...props}
                      className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  ),
                }}>{msg.text}</ReactMarkdown>
              </div>
            ))
          )}

          {/* Invisible div to track the bottom */}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Box */}
        <div className="flex items-center space-x-2 mt-2">
          <input
            type="text"
            className="flex-grow p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
            placeholder={"Type a message..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSendMessage()}
          />
          <button
            onClick={onSendMessage}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${"bg-[#0052FF] hover:bg-[#003ECF] text-white shadow-md"}`}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
