import Card from "../ui/Card";

export default function IntroCard({ className }) {
  return (
    <Card className={`flex flex-col justify-center ${className ?? ""}`}>
      <h1 className="text-4xl font-semibold text-white">Welcome,</h1>
      <p className="mt-2 leading-relaxed text-xl font-light">
        My name is <span className="font-semibold text-white">Ammaar Musthafa</span> and I'm a full-stack developer and graduate from Leicester.
      </p>
    </Card>
  );
}
