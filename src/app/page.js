"use client";
import { useState } from "react";
import SidebarToggleButton from "./components/SidebarToggleButton";
import ChatTaskButtons from "./components/ChatTaskButtons";
import SearchBox from "./components/SearchBox";
import MessageInputBox from "./components/MessageInputBox";

export default function ChatUI() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showFileOptions, setShowFileOptions] = useState(false);
  const [input, setInput] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");


  // Handle sending a message
  const handleSend = () => {
    if (input.trim()) {
      setInput("");
      setIsTyping(false);
    }
  };


  return (
    <div className="flex w-[770px] h-[610px] relative overflow-hidden bg-white rounded-lg mx-auto mt-[100px] mb-[22px] border border-[#E5E5EA]">

      {/* Sidebar toggle for showing/hiding the navigation panel */}
      <SidebarToggleButton
        isNavbarOpen={isNavbarOpen}
        setNavbarOpen={setNavbarOpen}
      />

      <div className="flex-1 relative">

        {/* Header buttons such as task controls */}
        <ChatTaskButtons />

        {/* Search bar for filtering messages */}
        <SearchBox
          showSearch={showSearch}
          setShowSearch={setShowSearch}
          searchText={searchText}
          setSearchText={setSearchText}
        />

        {/* Message input section with send and file options */}
        <MessageInputBox
          input={input}
          setInput={setInput}
          isTyping={isTyping}
          setIsTyping={setIsTyping}
          handleSend={handleSend}
          showFileOptions={showFileOptions}
          setShowFileOptions={setShowFileOptions}
        />
      </div>
    </div>
  );
}
