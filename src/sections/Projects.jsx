import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Images
import scholarStreamImg from "../assets/images/scholarstream.png";
import zylosImg from "../assets/images/zylos.png";
import simpleApp from "../assets/images/simpleapp.png";

export const projects = [
  {
    id: 1,
    name: "Zylos",
    tagline: "Freelance Marketplace",
    image: zylosImg,
    shortDesc:
      "Zylos is a freelance marketplace platform where clients can post jobs and freelancers can explore opportunities through a modern, user-friendly interface.",
    stack: ["MERN", "Firebase", "Framer Motion"],
    liveLink: "https://freelance-marketplace-zylos.netlify.app/",
    githubClient: "https://github.com/sehanur-rahman/B12-A10-Freelance-Marketplace-client",
  },
  {
    id: 2,
    name: "ScholarStream",
    tagline: "Scholarship Management System",
    image: scholarStreamImg,
    shortDesc:
      "ScholarStream is a scholarship management system designed to streamline applications, approvals, and student tracking with a structured dashboard.",
    stack: ["MongoDB", "Express", "React", "Node"],
    liveLink: "https://scholar-stream-b12a11.netlify.app/",
    githubClient: "https://github.com/sehanur-rahman/scholar-stream-client",
  },
  {
    id: 3,
    name: "Hero.io",
    tagline: "App Store Concept",
    image: simpleApp,
    shortDesc:
      "A mini project showcasing applications in a modern app-store style layout with data visualization and clean UI patterns.",
    stack: ["React", "Recharts", "Tailwind", "JSON"],
    liveLink: "https://hero-io-app-a08.netlify.app/",
    githubClient: "https://github.com/sehanur-rahman/Hero-Apps",
  },
];

export default function Projects() {
  const navigate = useNavigate();
  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  return (
    <section
      id="projects"
      className="relative py-14 overflow-hidden text-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* ===== Heading ===== */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            Selected{" "}
            <span className="italic bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <p className="mt-6 max-w-xl text-gray-400 text-lg">
            A collection of real-world projects demonstrating my experience in
            full-stack development, UI design, and system architecture.
          </p>
        </div>

        {/* ===== Projects Grid ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-125 rounded-[2.5rem]
                         overflow-hidden bg-[#0a0a0a]
                         border border-white/5 shadow-2xl"
            >
              {/* Image */}
              <motion.img
                src={project.image}
                alt={project.name}
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover
                           opacity-30 group-hover:opacity-60
                           transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent z-10" />

              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-700 group-hover:-translate-y-3">
                  <span className="text-cyan-400 text-[10px] font-bold tracking-[0.3em] uppercase block mb-2">
                    {project.tagline}
                  </span>

                  <h3 className="text-3xl font-black mb-3">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6
                                opacity-0 group-hover:opacity-100
                                transition-all duration-500 line-clamp-2">
                    {project.shortDesc}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] px-3 py-1 rounded-full
                                   bg-white/5 border border-white/10
                                   text-gray-400 font-mono uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => navigate(`/projects/${project.id}`)}
                      className="flex-1 bg-cyan-500 hover:bg-cyan-400
                                 text-black font-black py-4 rounded-2xl
                                 flex items-center justify-center gap-2
                                 text-xs uppercase tracking-widest
                                 transition-all active:scale-95"
                    >
                      Explore <ArrowUpRight size={16} />
                    </button>

                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub repository"
                      className="p-4 rounded-2xl bg-white/5
                                 border border-white/10
                                 hover:border-cyan-400 hover:text-cyan-400
                                 transition-all"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Index Badge */}
              <div className="absolute top-6 left-6 z-20 w-11 h-11
                              rounded-2xl flex items-center justify-center
                              text-[11px] font-mono text-white/50
                              bg-black/40 backdrop-blur-xl
                              border border-white/10
                              group-hover:border-cyan-400
                              group-hover:text-cyan-400 transition-colors">
                0{index + 1}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-cyan-500/5 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 w-100 h-100 bg-blue-600/5 rounded-full blur-[100px]" />
    </section>
  );
}
