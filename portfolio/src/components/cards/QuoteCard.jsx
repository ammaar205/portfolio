import Card from "../ui/Card";

export default function QuoteCard({ className }) {
  return (
    <Card className={`flex flex-col justify-center ${className ?? ""}`}>
      <p className="text-white text-2xl font-light leading-relaxed text-center">
        "We must know, we will know."
      </p>
      <p className="font-light mt-3 text-center">
        - David Hilbert
      </p>
    </Card>
  );
}
