import Image from "next/image";

export default function UploadPopup() {
  return (
    <div className="absolute bottom-[50px] left-[-20px] w-[255px] h-[47px] border border-[#E5E5EA] bg-white rounded-[16px] z-10 flex items-center px-4 space-x-4">
      <Image
        src="/assets/images/upload-icon.png"
        alt="Upload Icon"
        width={16}
        height={20}
      />
      <span className="text-sm text-[#AFAFAF] font-medium">
        Upload from your computer
      </span>
    </div>
  );
}
