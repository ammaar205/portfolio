import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0D0C1D] min-h-screen text-white">
      <Navbar page={page} setPage={setPage} />
      <main key={page} className="animate-fade-in-down">
        {page === "home" && <Home />}
        {page === "contact" && <Contact />}
        {page === "projects" && <Projects />}
      </main>
    </div>
  );
}

export default App;
