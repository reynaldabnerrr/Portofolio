import React, { useState } from "react";

interface ChatbotWidgetProps {
  isLightMode?: boolean;
}

export default function ChatbotWidget({ isLightMode = false }: ChatbotWidgetProps) {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [chatbotInput, setChatbotInput] = useState("");
  const [chatbotMessages, setChatbotMessages] = useState<Array<{ sender: "bot" | "user"; text: string }>>([
    {
      sender: "bot",
      text: "Hello! 👋 I'm Reynald's virtual assistant. How can I help you today? Ask me about projects, skills, or contact info.",
    },
  ]);
  const [chatbotTyping, setChatbotTyping] = useState(false);

  const handleChatbotSend = (text: string) => {
    if (!text.trim()) return;

    setChatbotMessages((prev) => [...prev, { sender: "user", text }]);
    setChatbotInput("");
    setChatbotTyping(true);

    setTimeout(() => {
      setChatbotTyping(false);
      const query = text.toLowerCase();
      let response =
        "I'm not sure about that. Try selecting one of the quick options below or ask about 'projects', 'skills', or 'hire'.";

      if (query.includes("project") || query.includes("work")) {
        response =
          "Reynald has developed outstanding systems like Topcell CRM, ANTEKHUB (Flutter mobile app), and Jokka Web (Makassar culture explorer). You can inspect them in the Projects section!";
      } else if (query.includes("skill") || query.includes("stack") || query.includes("tech")) {
        response =
          "His core stack includes Laravel, Next.js, React, Tailwind CSS, Flutter, Firebase, Docker, Nginx, and Cybersecurity Incident Response.";
      } else if (
        query.includes("hire") ||
        query.includes("contact") ||
        query.includes("email") ||
        query.includes("phone")
      ) {
        response =
          "You can contact Reynald directly via email at reynald030685@gmail.com or hit the Contact cards to message him on LinkedIn/WhatsApp!";
      } else if (query.includes("hello") || query.includes("hi ") || query.includes("hey")) {
        response =
          "Hello! Let me know what you'd like to discover about Reynald's engineering stack or custom software services.";
      }

      setChatbotMessages((prev) => [...prev, { sender: "bot", text: response }]);
    }, 750);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Chat Window Box */}
      {isChatbotOpen && (
        <div
          className="cyber-card w-[320px] sm:w-[350px] h-[450px] rounded-3xl border border-white/[0.08] bg-[#0d141d]/90 overflow-hidden shadow-2xl flex flex-col justify-between mb-4 animate-slide-up"
          role="dialog"
          aria-modal="true"
          aria-label="Reynald's virtual assistant chatbot"
        >
          {/* Header info */}
          <div className="bg-[#075e54] p-4 flex items-center gap-3 text-white">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-lg">
                <i className="fa-solid fa-robot" aria-hidden="true"></i>
              </div>
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full absolute bottom-0 right-0 border border-[#075e54] animate-pulse"></div>
            </div>
            <div>
              <span className="font-bold text-sm block font-outfit">Don Neto Assistant</span>
              <span className="text-[10px] text-green-200">Online</span>
            </div>
          </div>

          {/* Messages body */}
          <div
            className="flex-1 p-4 bg-[#0b141a]/95 overflow-y-auto space-y-3.5 scrollbar-thin"
            aria-live="polite"
          >
            {chatbotMessages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`p-3 rounded-2xl text-xs max-w-[85%] font-medium relative shadow ${
                    msg.sender === "user"
                      ? "bg-[#005c4b] text-white rounded-tr-none"
                      : "bg-[#202c33] text-gray-200 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {chatbotTyping && (
              <div className="flex justify-start">
                <div className="p-3 bg-[#202c33] text-gray-400 rounded-2xl rounded-tl-none text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                  <span
                    className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></span>
                  <span
                    className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Action Pills */}
          <div className="px-4 py-2 bg-white/[0.01] border-t border-white/[0.04] flex flex-wrap gap-1.5">
            {[
              { label: "📁 View Projects", val: "Show Projects" },
              { label: "🛠️ Core Stack", val: "Check Core Stack" },
              { label: "💼 Contact Info", val: "Hire Reynald" },
            ].map((pill, pIdx) => (
              <button
                key={pIdx}
                type="button"
                onClick={() => handleChatbotSend(pill.val)}
                className="px-2.5 py-1 bg-white/5 border border-white/10 hover:border-indigo-500/30 rounded-full text-[10px] text-gray-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                {pill.label}
              </button>
            ))}
          </div>

          {/* Input field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleChatbotSend(chatbotInput);
            }}
            className="bg-[#1f2c34] p-3 flex items-center gap-2"
          >
            <input
              id="chatbot-input"
              name="chatbotInput"
              type="text"
              autoComplete="off"
              spellCheck={false}
              aria-label="Type your message to assistant"
              value={chatbotInput}
              onChange={(e) => setChatbotInput(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-2 text-xs text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="w-8 h-8 rounded-full bg-[#00a884] hover:bg-[#008f72] flex items-center justify-center text-white text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Send message to assistant"
            >
              <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger icon */}
      <button
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
        className="w-14 h-14 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 active:scale-95 transition-all shadow-green-600/20 z-40 relative animate-bounce focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
        aria-label={isChatbotOpen ? "Close virtual assistant chatbot" : "Open virtual assistant chatbot"}
      >
        {isChatbotOpen ? (
          <i className="fa-solid fa-xmark" aria-hidden="true"></i>
        ) : (
          <>
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
            <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-red-500 rounded-full border-2 border-[#030712] flex items-center justify-center text-[9px] font-bold text-white animate-pulse">
              1
            </span>
          </>
        )}
      </button>
    </div>
  );
}
