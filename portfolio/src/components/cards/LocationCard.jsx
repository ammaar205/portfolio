import Card from "../ui/Card";

export default function LocationCard({ className }) {
  return (
    <Card className={`flex items-center justify-center border-4 border-[#484973] !bg-[#0D0C1D] ${className ?? ""}`}>
      <h2 className="text-3xl font-semibold text-white">Leicester, UK</h2>
    </Card>
  );
}
