import Card from "../ui/Card";
import { FaReact, FaPython, FaGithub, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiKotlin, SiPostgresql, SiOpengl } from "react-icons/si";

export default function FavouritesCard({ className }) {
  return (
    <Card className={`flex flex-col ${className ?? ""}`}>
      <h2 className="text-3xl font-semibold text-white mb-4">My Favorites</h2>
      <div className="flex-1 grid grid-cols-3 gap-3 text-5xl text-slate-400 justify-items-center items-center">
        <FaReact      className="hover:text-[#61DAFB] transition-colors cursor-pointer" title="React" />
        <FaPython     className="hover:text-[#3776AB] transition-colors cursor-pointer" title="Python" />
        <SiCplusplus  className="hover:text-[#00599C] transition-colors cursor-pointer" title="C++" />
        <SiKotlin     className="hover:text-[#7F52FF] transition-colors cursor-pointer" title="Kotlin" />
        <SiPostgresql className="hover:text-[#4169E1] transition-colors cursor-pointer" title="PostgreSQL" />
        <SiOpengl     className="hover:text-[#5586A4] transition-colors cursor-pointer" title="OpenGL" />
        <FaDocker     className="hover:text-[#2496ED] transition-colors cursor-pointer" title="Docker" />
        <FaGithub     className="hover:text-white transition-colors cursor-pointer" title="GitHub" />
        <FaGitAlt     className="hover:text-[#F05032] transition-colors cursor-pointer" title="Git" />
      </div>
    </Card>
  );
}
