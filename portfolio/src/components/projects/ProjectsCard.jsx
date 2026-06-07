import { useState } from "react";

const projects = [
  {
    title: "Particle Simulation",
    description:
      "Real-time particle physics simulation with interactive controls. Built with Python and ModernGL, featuring collision detection, gravity wells, and dynamic particle generation. Currently working on an upgrade with C++ and OpenGL",
    tags: ["C++", "OpenGL", "Computer Graphics", "NumPy", "Glm", "ModernGL"],
    link: "https://github.com/ammaar205",
    images: [
      "particlesim1.jpeg",
      "particlesim2.jpeg",
      "particlesim3.jpeg",
    ],
  },
  {
    title: "FPL Oracle",
    description:
      "Fantasy Premier League analytics tool that predicts player performance and optimises team selection using machine learning models trained on historical match data.",
    tags: ["Python", "Machine Learning", "React", "FastAPI", "Postgresql", "Docker", "R"],
    link: "https://github.com/ammaar205",
    images: [
      "fpl1.png",
      "fpl2.png",
    ],
  },
  {
    title: "Bookwyrm (In progress)",
    description:
      "Social book discovery platform for tracking reading progress, sharing reviews, and receiving personalised recommendations based on reading history and preferences.",
    tags: ["React", "PostgreSQL", "FastAPI", "Docker", "nginx", "PWA"],
    link: "https://github.com/ammaar205",
    images: [
      "bookwyrm1.png",
      "bookwyrm2.png",
      "bookwyrm3.png",
    ],
  },
  {
    title: "Fitness Tracker",
    description:
      "Comprehensive workout logging app with progress charts, custom routine builder, exercise library, and goal tracking with motivational streaks and achievements.",
    tags: ["Kotlin", "GraphQL", "Firebase", "API", "Figma"],
    link: "https://github.com/ammaar205",
    images: [
      "fitness1.png",
      "fitness2.png",
      "fitness3.png"
    ],
  },
  {
    title: "Cafe Application",
    description:
      "Digital cafe management system handling orders, inventory tracking, staff scheduling, and customer loyalty programmes with real-time analytics dashboards.",
    tags: ["Kotlin", "Firebase", "XML"],
    link: "https://github.com/ammaar205",
    images: [
      "cafe1.png",
      "cafe2.png",
    ],
  },
];

function ProjectCard({ project, index }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const { images } = project;
  const swap = index % 2 !== 0;

  const prev = () =>
    setCurrentIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrentIdx((i) => (i + 1) % images.length);

  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-10 bg-[#161B33] p-6 md:p-10 rounded-2xl">
      <div className={`relative group ${swap ? "md:order-2" : ""}`}>
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={images[currentIdx]}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover transition-opacity duration-300"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
              >
                ›
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIdx ? "bg-white w-3" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div
        className={`flex flex-col h-full ${swap ? "md:order-1" : ""}`}
      >
        <div className="flex flex-col gap-1">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-3xl font-bold text-white hover:underline"
          >
            {project.title}
          </a>
          <p className="text-slate-400 mt-2 leading-relaxed text-lg md:text-xl">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto pt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#484973] px-4 py-1.5 rounded-full text-sm md:text-base"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsCard() {
  return (
    <div className="space-y-10">
      {projects.map((project, i) => (
        <ProjectCard key={project.title} project={project} index={i} />
      ))}
    </div>
  );
}
