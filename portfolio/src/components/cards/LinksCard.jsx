import Card from "../ui/Card";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const links = [
  { icon: FaLinkedin, href: "https://linkedin.com/in/ammaar-musthafa" },
  { icon: FaGithub, href: "https://github.com/ammaar205" },
  { icon: FaYoutube, href: "https://youtube.com/@yourchannel" },
  { icon: FaInstagram, href: "https://instagram.com/amusthafa1" },
];

export default function LinksCard({ className }) {
  return (
    <Card className={`flex flex-col ${className ?? ""}`}>
      <h2 className="text-xl font-semibold mb-4 text-white">Other Links</h2>
      <div className="grid grid-cols-2 gap-3 flex-1">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl flex justify-center items-center text-slate-400 text-7xl hover:text-white hover:scale-110 transition-all cursor-pointer"
          >
            <link.icon />
          </a>
        ))}
      </div>
    </Card>
  );
}
