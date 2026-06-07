export default function ProfileCard({ className }) {
  return (
    <div className={`rounded-2xl overflow-hidden ${className ?? ""}`}>
      <img
        src="/headshot.png"
        className="w-full h-full object-cover object-top"
        alt="profile"
      />
    </div>
  );
}
