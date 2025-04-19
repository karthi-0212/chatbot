export default function MessageList({ containerRef, messages }) {
  return (
    <div
      ref={containerRef}
      className="custom-scrollbar absolute top-[70px] bottom-[140px] left-[84px] right-0 overflow-y-auto px-6 space-y-2"
    >
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className="bg-[#0c5cf7] text-white mr-[54px] px-4 py-2 rounded-lg mb-2 ml-auto w-fit max-w-[60%] break-all whitespace-pre-wrap"
        >
          {msg}
        </div>
      ))}
    </div>
  );
}
