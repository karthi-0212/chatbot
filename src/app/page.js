"use client";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import SidebarToggleButton from "./components/SidebarToggleButton";
import SidebarCloseIcon from "./components/SidebarCloseIcon";
import ChatTaskButtons from "./components/ChatTaskButtons";
import SearchBox from "./components/SearchBox";
import MessageList from "./components/MessageList";
import MessageInputBox from "./components/MessageInputBox";

export default function ChatUI() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showFileOptions, setShowFileOptions] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  // Fetch all messages once at mount
  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      const res = await fetch("/api/messages");
      const data = await res.json();
      setMessages(data.map((msg) => msg.text));
      setFilteredMessages(data);
      setIsLoading(false);
    };
    fetchMessages();
  }, []);

  // Handle sending a message
  const handleSend = async () => {
    if (input.trim()) {
      try {
        const res = await fetch("/api/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: input }),
        });

        if (!res.ok) throw new Error("Failed to send message");

        const newMessage = await res.json();
        setMessages((prev) => [...prev, newMessage.text]);
        setFilteredMessages((prev) => [...prev, newMessage]);
        setInput("");
        setIsTyping(false);
      } catch (error) {
        console.error("Send Error:", error);
      }
    }
  };

  // when user search into the search box, it fetches from the DB
  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch(`/api/messages/search?q=${searchText}`);
      const data = await res.json();
      setFilteredMessages(data);
    };
    fetchMessages();
  }, [searchText]);

  return (
    <div className="responsive-chat flex w-[770px] h-[610px] relative overflow-hidden bg-white rounded-3xl mx-auto mt-[100px] mb-[22px] border border-[#E5E5EA]">
      {/* Sidebar with Animation */}
      <AnimatePresence>{isNavbarOpen && <Navbar isHovered={isHovered} />}</AnimatePresence>

      {/* Sidebar toggle for showing/hiding the navigation panel */}
      <SidebarToggleButton
        isNavbarOpen={isNavbarOpen}
        setNavbarOpen={setNavbarOpen}
        setShowSearch={setShowSearch}
        setShowFileOptions={setShowFileOptions}
      />

      {/* Show close icon when navbar is open, with hover state handling */}
      {isNavbarOpen && (
        <SidebarCloseIcon
          setNavbarOpen={setNavbarOpen}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
      )}

      <div className="flex-1 relative">
        {/* Header buttons such as task controls */}
        {input === "" && !showFileOptions && !showSearch && <ChatTaskButtons />}

        {/* Search bar for filtering messages */}
        <SearchBox
          showSearch={showSearch}
          setShowSearch={setShowSearch}
          searchText={searchText}
          setSearchText={setSearchText}
          setNavbarOpen={setNavbarOpen}
          setShowFileOptions={setShowFileOptions}
        />

        {/* Container to display the messages */}
        {isLoading ? (
          <div className="flex justify-center items-center mt-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (<MessageList containerRef={containerRef} messages={filteredMessages} isLoading={isLoading} />
        )}

        {/* Message input section with send and file options */}
        <MessageInputBox
          input={input}
          setInput={setInput}
          isTyping={isTyping}
          setIsTyping={setIsTyping}
          handleSend={handleSend}
          showFileOptions={showFileOptions}
          setShowFileOptions={setShowFileOptions}
          setNavbarOpen={setNavbarOpen}
          setShowSearch={setShowSearch}
        />
      </div>
    </div>
  );
}