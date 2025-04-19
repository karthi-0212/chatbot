import { motion } from "framer-motion";

export default function ChatTaskButtons() {
  return (
    <div className="absolute ml-[25px] bottom-[95px] left-0 right-0 flex justify-center gap-2">
      {["Task 1", "Task 2", "Task 3", "Task 4"].map((task, index) => (
        <motion.button
          key={index}
          whileHover={{
            y: -5,
            color: "#000000",
            borderColor: "#000000",
            backgroundColor: "#F7F7F7",
          }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-[149px] h-[40px] bg-white border border-[#E5E5EA] rounded-full text-[#AFAFAF] cursor-pointer"
        >
          {task}
        </motion.button>
      ))}
    </div>
  );
}
