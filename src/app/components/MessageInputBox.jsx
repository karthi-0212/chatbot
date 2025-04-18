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
  setShowFileOptions
}) {
  return (
    <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between gap-2 px-4 transition-all duration-300">
      <div className="relative ml-auto mr-auto w-[628px]">
        {showFileOptions && <UploadPopup />}
        <motion.div
          animate={{ rotate: showFileOptions ? 45 : 0 }}
          transition={{ duration: 0.15 }}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full p-2 hover:bg-gray-200 transition-colors duration-200"
          onClick={() => setShowFileOptions((prev) => !prev)}
        >
          <Image
            src="/assets/images/add-icon.png"
            alt="Add Icon"
            width={20}
            height={20}
          />
        </motion.div>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setIsTyping(e.target.value.trim() !== "");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          placeholder="What's on your mind?"
          className="w-full h-[55px] pl-14 font-medium ml-4 pr-16 rounded-[18px] border border-[#E5E5EA] outline-none transition-all duration-300"
        />
        <button
          className={`absolute right-8 top-1/2 transform -translate-y-1/2 w-[30px] h-[30px] rounded-full flex items-center justify-center ${isTyping ? "bg-black text-white" : "bg-gray-300 text-white"
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
