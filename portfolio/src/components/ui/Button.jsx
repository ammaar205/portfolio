export default function Button({ children, onClick, variant = "default" }) {
  const cta = variant === "cta";

  return (
    <button
      onClick={onClick}
      className={`
        px-10 py-3 rounded-full
        text-sm font-medium tracking-[0.5em]
        transition-all duration-200
        hover:scale-[0.98]
        ${cta
          ? "bg-cyan-500 border-4 border-cyan-500 text-white hover:bg-cyan-400 hover:border-cyan-400"
          : "border-4 border-[#484973] text-white hover:border-white"
        }
      `}
    >
      {children}
    </button>
  );
}
