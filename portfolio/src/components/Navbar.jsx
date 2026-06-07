import { useState } from "react";
import Button from "./ui/Button";
import ResumeModal from "./ResumeModal";

export default function Navbar({ page, setPage }) {
  const [resumeOpen, setResumeOpen] = useState(false);
  const links = ["home", "projects", "contact"];

  return (
    <>
      <div className="flex justify-center gap-8 py-12">
        {links.map((link) => (
          <Button
            key={link}
            onClick={() => setPage(link)}
            active={page === link}
          >
            {link.toUpperCase()}
          </Button>
        ))}
        <Button variant="cta" onClick={() => setResumeOpen(true)}>RESUME</Button>
      </div>
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </>
  );
}
