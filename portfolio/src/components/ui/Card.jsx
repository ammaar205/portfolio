export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-[#161B33] rounded-2xl p-6
      ${className}`}
    >
      {children}
    </div>
  );
}
