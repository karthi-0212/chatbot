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
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle sending a message
  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
      setIsTyping(false);
    }
  };

  const filteredMessages = searchText
    ? messages.filter((msg) =>
      msg.toLowerCase().includes(searchText.toLowerCase())
    )
    : messages;

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
        <MessageList containerRef={containerRef} messages={filteredMessages} />

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