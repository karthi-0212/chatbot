import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function SearchBox({
  showSearch,
  setShowSearch,
  searchText,
  setSearchText,
  setNavbarOpen,
  setShowFileOptions,
}) {
  return (
    <>
      {!showSearch && (
        <div className="absolute top-6 right-[30px] z-10">
          {/* search icon */}
          <Image
            src="/assets/images/search-icon.png"
            alt="Search Icon"
            width={16}
            height={19}
            className="cursor-pointer"
            onClick={() => {
              setShowSearch(true);
              setNavbarOpen(false);
              setShowFileOptions(false);
            }}
          />
        </div>
      )}

      {/* Input search box */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.3 }}
            className="absolute top-6 right-[70px] w-[628px] h-[37px] bg-gray-100 rounded-full px-4 flex items-center justify-between border border-[#E5E5EA] z-20"
          >
            <Image
              src="/assets/images/search-icon.png"
              alt="Search Icon"
              width={16}
              height={19}
            />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="bg-transparent flex-1 mx-2 outline-none"
            />
            <Image
              src="/assets/images/close-icon.png"
              alt="Search Icon"
              width={15}
              height={15}
              className="cursor-pointer"
              onClick={() => {
                setShowSearch(false);
                setSearchText("");
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
