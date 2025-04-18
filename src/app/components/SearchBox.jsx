import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

export default function SearchBox({ showSearch, setShowSearch, searchText, setSearchText }) {
  return (
    <>
      <div className="absolute top-6 right-[30px] z-10">
        <Image
          src="/assets/images/search-icon.png"
          alt="Search Icon"
          width={16}
          height={19}
          className="cursor-pointer"
          onClick={() => setShowSearch(true)}
        />
      </div>
    </>
  );
}
