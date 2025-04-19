import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import UploadPopup from "./UploadPopup";

export default function MessageInputBox({
  input,
  setInput,
  isTyping,
  setIsTyping,
  handleSend,
  showFileOptions,
  setShowFileOptions,
  setNavbarOpen,
  setShowSearch,
}) {
  return (
    <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between gap-2 px-4 transition-all duration-300">
      <div className="relative ml-auto mr-auto w-[628px]">

        {/* upload pop up */}
        {showFileOptions && <UploadPopup />}
        <motion.div
          animate={{ rotate: showFileOptions ? 45 : 0 }}
          transition={{ duration: 0.15 }}
          className="absolute left-8 bottom-[14px] cursor-pointer rounded-full p-2 hover:bg-gray-200 transition-colors duration-200"
          onClick={() => setShowFileOptions((prev) => !prev)}
        >
          {/* upload icon */}
          <Image
            src="/assets/images/add-icon.png"
            alt="Add Icon"
            width={20}
            height={20}
            onClick={() => {
              setNavbarOpen(false);
              setShowSearch(false);
            }}
          />
        </motion.div>

        {/* Chatbot input text area */}
        <textarea
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setIsTyping(e.target.value.trim() !== "");
          }}
          onInput={(e) => {
            // reset the height when content is cleared
            if (e.target.value.trim() === "") {
              e.target.style.height = "55px"; // reset to initial height
            } else {
              // prevent height adjustment if only one line of text is present
              if (e.target.scrollHeight > 55) {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
              setInput(""); // clear the input after sending
              e.target.style.height = "55px"; // reset height to initial value
              setIsTyping(false); // reset typing state
            }
          }}
          style={{ height: "55px" }} // set the initial height
          placeholder="What's on your mind?"
          className={`w-full min-h-[55px] max-h-[150px] pl-14 pr-16 py-[14px] ml-4 rounded-[18px] border ${
            isTyping ? "border-[#ADADAD]" : "border-[#E5E5EA]"
          } placeholder-[#AFAFAF] outline-none transition-all duration-300 resize-none overflow-hidden`}
        />

        {/* send button */}
        <button
          className={`absolute right-[10px] bottom-[14px] w-[30px] h-[30px] rounded-full flex items-center justify-center ${
            isTyping ? "bg-black text-white cursor-pointer" : "bg-gray-300 text-white"
          } transition-colors duration-300`}
          disabled={!isTyping}
          onClick={handleSend}
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
}
