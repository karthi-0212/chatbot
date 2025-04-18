import Image from "next/image";

export default function SidebarCloseIcon({ setNavbarOpen, isHovered, setIsHovered }) {
  return (
    <div
      className="absolute top-1/2 left-[171px] z-10 transform -translate-y-1/2 cursor-pointer flex flex-col items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={
          isHovered
            ? "/assets/images/sidebar-1.png"
            : "/assets/images/sidebar-2.png"
        }
        alt="Sidebar Icon"
        width={4}
        height={14}
        onClick={() => {setNavbarOpen(false);setIsHovered(false)}}
      />
    </div>
  );
}
