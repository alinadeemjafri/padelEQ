"use client";

import { useState, FormEvent, useEffect, useCallback, useRef } from "react";
import { Send, Bot, Paperclip, Mic, X, MessageCircle } from "lucide-react";
// shadcn/ui imports will be resolved after integration
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Textarea } from "@/components/ui/textarea";

// Message Loading Component
function MessageLoading() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
      <circle cx="4" cy="12" r="2" fill="currentColor">
        <animate id="spinner_qFRN" begin="0;spinner_OcgL.end+0.25s" attributeName="cy" calcMode="spline" dur="0.6s" values="12;6;12" keySplines=".33,.66,.66,1;.33,0,.66,.33" />
      </circle>
      <circle cx="12" cy="12" r="2" fill="currentColor">
        <animate begin="spinner_qFRN.begin+0.1s" attributeName="cy" calcMode="spline" dur="0.6s" values="12;6;12" keySplines=".33,.66,.66,1;.33,0,.66,.33" />
      </circle>
      <circle cx="20" cy="12" r="2" fill="currentColor">
        <animate id="spinner_OcgL" begin="spinner_qFRN.begin+0.2s" attributeName="cy" calcMode="spline" dur="0.6s" values="12;6;12" keySplines=".33,.66,.66,1;.33,0,.66,.33" />
      </circle>
    </svg>
  );
}

// Chat Bubble Components
function ChatBubble({ variant = "received", className, children }) {
  // cn utility should be replaced with your own or shadcn/ui's
  return (
    <div className={`flex items-start gap-2 mb-4 ${variant === "sent" ? "flex-row-reverse" : ""} ${className || ''}`}>
      {children}
    </div>
  );
}
function ChatBubbleMessage({ variant = "received", isLoading, className, children }) {
  return (
    <div className={`rounded-lg p-3 ${variant === "sent" ? "bg-primary text-primary-foreground" : "bg-muted"} ${className || ''}`}>
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <MessageLoading />
        </div>
      ) : (
        children
      )}
    </div>
  );
}
function ChatBubbleAvatar({ src, fallback = "AI", className }) {
  // Replace with shadcn/ui Avatar
  return (
    <div className={`h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold ${className || ''}`}>
      {src ? <img src={src} alt="avatar" className="h-8 w-8 rounded-full" /> : fallback}
    </div>
  );
}

// Chat Input Component
function ChatInput({ className, ...props }) {
  // Replace with shadcn/ui Textarea
  return (
    <textarea
      autoComplete="off"
      name="message"
      className={`max-h-12 px-4 py-3 bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-md flex items-center h-16 resize-none ${className || ''}`}
      {...props}
    />
  );
}

// Chat Message List Component
function ChatMessageList({ className, children }) {
  const scrollRef = useRef(null);
  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [children]);
  return (
    <div className="relative w-full h-full">
      <div
        className={`flex flex-col w-full h-full p-4 overflow-y-auto ${className || ''}`}
        ref={scrollRef}
      >
        <div className="flex flex-col gap-6">{children}</div>
      </div>
    </div>
  );
}

// Expandable Chat Components
function ExpandableChat({ className, position = "bottom-right", size = "md", icon, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef(null);
  const toggleChat = () => setIsOpen(!isOpen);
  const positions = {
    "bottom-right": "bottom-5 right-5",
    "bottom-left": "bottom-5 left-5",
  };
  const chatPositions = {
    "bottom-right": "sm:bottom-[calc(100%+10px)] sm:right-0",
    "bottom-left": "sm:bottom-[calc(100%+10px)] sm:left-0",
  };
  const dimensions = {
    sm: "sm:max-w-sm sm:max-h-[500px]",
    md: "sm:max-w-md sm:max-h-[600px]",
    lg: "sm:max-w-lg sm:max-h-[700px]",
    xl: "sm:max-w-xl sm:max-h-[800px]",
    full: "sm:w-full sm:h-full",
  };
  return (
    <div className={`fixed ${positions[position]} z-50 ${className || ''}`}>
      <div
        ref={chatRef}
        className={`flex flex-col bg-background border sm:rounded-lg shadow-md overflow-hidden transition-all duration-250 ease-out sm:absolute sm:w-[90vw] sm:h-[80vh] fixed inset-0 w-full h-full sm:inset-auto ${chatPositions[position]} ${dimensions[size]} ${isOpen ? 'pointer-events-auto opacity-100 visible scale-100 translate-y-0' : 'pointer-events-none opacity-0 invisible scale-100 sm:translate-y-5'}`}
      >
        {children}
        <button
          className="absolute top-2 right-2 sm:hidden"
          onClick={toggleChat}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <button
        onClick={toggleChat}
        className="w-14 h-14 rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:shadow-black/30 transition-all duration-300 bg-primary text-primary-foreground"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          icon || <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
function ExpandableChatHeader({ className, ...props }) {
  return (
    <div className={`flex items-center justify-between p-4 border-b ${className || ''}`} {...props} />
  );
}
function ExpandableChatBody({ className, ...props }) {
  return <div className={`flex-grow overflow-y-auto ${className || ''}`} {...props} />;
}
function ExpandableChatFooter({ className, ...props }) {
  return <div className={`border-t p-4 ${className || ''}`} {...props} />;
}

// Accent color
const ACCENT = "#2563eb"; // blue-600
const HEADER_BG = "#fff";
const HEADER_BORDER = "#e5e7eb"; // slate-200

// Main Chatbot Widget Component
function ChatbotWidget() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hi! I'm your PadelEQ assistant. How can I help you today?",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = {
      id: messages.length + 1,
      content: input,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          content: data.reply || "I'm sorry, I couldn't process that request.",
          sender: "ai",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          content: "Sorry, there was an error processing your request.",
          sender: "ai",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Animate open/close
  const chatWindowClass = `fixed bottom-6 right-6 z-50 transition-all duration-300 ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'}`;

  // SVG chat icon (white for button)
  const ChatIconButton = (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  );
  // SVG chat icon (blue for header)
  const ChatIcon = (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  );
  const PaperPlane = (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"/></svg>
  );

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-none focus:outline-none transition-all bg-blue-600 hover:shadow-blue-400/40"
        style={{ color: 'white', fontSize: 28 }}
        aria-label="Open chat"
      >
        {isOpen ? <span style={{fontSize: 32}}>×</span> : ChatIconButton}
      </button>
      {/* Chat Window */}
      <div className={chatWindowClass} style={{ width: 370, maxWidth: '95vw' }}>
        <div className="rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl bg-white/80 border border-slate-200 flex flex-col" style={{ minHeight: 420, maxHeight: 600 }}>
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b" style={{ background: HEADER_BG, borderColor: HEADER_BORDER, boxShadow: '0 2px 8px 0 #0001' }}>
            <div className="flex items-center gap-2">
              {ChatIcon}
              <span className="font-bold text-lg tracking-tight text-blue-700">PadelEQ Chat</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Minimize chat"
              tabIndex={0}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#64748b" strokeWidth="2" strokeLinecap="round" d="M6 12h12"/></svg>
            </button>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4" ref={chatRef} style={{ fontSize: 15 }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-end gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`rounded-full w-8 h-8 flex items-center justify-center text-xs font-semibold ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-300 text-slate-700'}`}>{msg.sender === 'ai' ? 'AI' : 'You'}</div>
                  <div className={`px-4 py-2 rounded-2xl shadow ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-slate-800 border border-slate-200'}`}>{msg.content}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start"><div className="rounded-full w-8 h-8 flex items-center justify-center text-xs font-semibold bg-slate-300 text-slate-700">AI</div><div className="px-4 py-2 rounded-2xl shadow bg-white text-slate-800 border border-slate-200 ml-2 animate-pulse">...</div></div>
            )}
          </div>
          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 border-t bg-white/90">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-full px-4 py-2 border border-slate-200 focus:ring-2 focus:ring-blue-400 outline-none bg-white text-slate-900"
              style={{ fontSize: 15 }}
              disabled={isLoading}
              aria-label="Type your message"
            />
            <button
              type="submit"
              className="rounded-full p-2 transition-colors"
              style={{ background: ACCENT, color: 'white' }}
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              {PaperPlane}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChatbotWidget; 