import { motion } from "framer-motion";

export default function Navbar({ isHovered }) {
  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      exit={{ x: -200 }}
      transition={{ duration: 0.4 }}
      className={`w-[161px] h-full bg-black text-white rounded-l-3xl p-2 flex flex-col justify-between ${
        isHovered ? "pointer-events-none opacity-60" : ""
      }`}
    >
      <div className="space-y-2">
        <div className="text-[13px] p-2 mt-3 flex items-center">
          <img
            src={`/assets/images/Profile.png`}
            alt="Profile icon"
            width={25}
            height={25}
            className="mx-2 my-[6px]"
          />
          Jane Cooper
        </div>

        {/* Navbar elements */}
        <div className="space-y-2">
          {["Chats", "Sent", "Draft", "Spam", "Trash"].map((item, index) => (
            <div
              key={index}
              className="hover:bg-gray-700 rounded-xl cursor-pointer p-1 flex items-center"
            >
              <img
                src={`/assets/images/${item}.png`}
                alt={`${item} icon`}
                width={30}
                height={30}
                className="mx-2 my-[6px]"
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navbar footer elements */}
      <div className="space-y-2">
        {["Help", "Rate", "About"].map((item, index) => (
          <div
            key={index}
            className="hover:bg-gray-700 rounded-xl cursor-pointer p-1 flex items-center"
          >
            <img
              src={`/assets/images/${item}.png`}
              alt={`${item} icon`}
              width={30}
              height={30}
              className="mx-2 my-[6px]"
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
