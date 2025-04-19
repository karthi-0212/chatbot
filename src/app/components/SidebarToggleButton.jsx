import Image from "next/image";

export default function SidebarToggleButton({
  isNavbarOpen,
  setNavbarOpen,
  setShowSearch,
  setShowFileOptions,
}) {
  return (
    <button
      className="absolute top-1/2 left-[13px] z-20 transform -translate-y-1/2 h-[298px] flex items-center cursor-pointer"
      onClick={() => {
        setNavbarOpen(!isNavbarOpen);
        setShowSearch(false);
        setShowFileOptions(false);
      }}
    >
      <Image
        src="/assets/images/right-arrow.png"
        alt="Arrow"
        width={9}
        height={14}
        className={isNavbarOpen ? "hidden" : ""}
      />
    </button>
  );
}