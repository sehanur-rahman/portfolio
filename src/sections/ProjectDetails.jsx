import { useEffect } from "react";
import {
  useParams,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { projects } from "./Projects";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  Globe,
  Terminal,
  Box,
  ChevronRight,
} from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const project = projects.find((p) => p.id === Number(id));
  if (!project) return null;

  /* ===== SCROLL TO TOP ON LOAD ===== */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <section className="bg-[#050505] text-white min-h-screen px-6 selection:bg-cyan-500 selection:text-black">

      {/* ===== TOP NAV (NO FIXED, NO GLASS) ===== */}
      <div className="max-w-7xl mx-auto pt-10 pb-20 flex justify-between items-center">
        
        {/* Return Home */}
        <Link
          to="/"
          className="group relative px-6 py-3 rounded-full text-[10px]
                     font-mono uppercase tracking-[0.4em]
                     border border-white/20 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition">
            <ArrowLeft size={14} /> Return Home
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500
                           translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
        </Link>

        {/* Project Badge */}
        <span className="px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest
                         border border-cyan-400/40 text-cyan-400 bg-cyan-400/10">
          Project / 0{project.id}
        </span>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-7xl mx-auto pb-24 flex flex-col lg:flex-row gap-20">

        {/* ===== LEFT : IMAGE ===== */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* ===== RIGHT : CONTENT ===== */}
        <div className="lg:w-1/2 space-y-20">

          {/* Header */}
          <header className="space-y-6">
            <span className="text-cyan-400 font-mono text-xs tracking-[0.5em] uppercase">
              {project.tagline}
            </span>

            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight uppercase">
              {project.name}
              <span className="text-cyan-400">.</span>
            </h1>

            <div className="flex gap-4 pt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-white text-black font-bold rounded-full
                           text-[10px] uppercase tracking-widest
                           hover:bg-cyan-400 transition flex items-center gap-2"
              >
                Launch App <Globe size={14} />
              </a>

              <a
                href={project.githubClient}
                target="_blank"
                rel="noreferrer"
                className="p-4 border border-white/20 rounded-full
                           hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                <Github size={18} />
              </a>
            </div>
          </header>

          {/* Overview */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-cyan-400">
              <Terminal size={18} />
              <span className="font-mono text-xs tracking-widest uppercase">
                Overview
              </span>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed">
              {project.shortDesc}
            </p>

            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </section>

          {/* Tech Stack */}
          <section className="space-y-8">
            <h3 className="text-sm font-mono tracking-widest uppercase flex items-center gap-3 text-zinc-500">
              <Box size={16} /> Tech Stack
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {project.stack.map((tech, i) => (
                <div
                  key={i}
                  className="p-6 border border-white/10 rounded-2xl
                             bg-white/[0.03] hover:bg-white/[0.06] transition"
                >
                  <span className="text-xs font-mono text-zinc-500 block mb-1">
                    MOD_0{i + 1}
                  </span>
                  <span className="text-lg font-bold uppercase tracking-tight">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Narrative */}
          <section className="grid gap-12 text-zinc-400">
            <div>
              <h4 className="text-white font-bold uppercase flex items-center gap-2 mb-2">
                <ChevronRight size={14} className="text-cyan-400" />
                Challenge
              </h4>
              <p>
                {project.challenges ||
                  "Designing a scalable structure while maintaining smooth UI interactions and clean state management."}
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase flex items-center gap-2 mb-2">
                <ChevronRight size={14} className="text-cyan-400" />
                Future Improvements
              </h4>
              <p>
                {project.improvements ||
                  "Adding real-time features, optimizing performance, and expanding functionality for broader use cases."}
              </p>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="pt-16">
            <button
              onClick={() => navigate(-1)}
              className="px-10 py-4 rounded-full border border-white/20
                         text-[10px] font-mono uppercase tracking-[0.4em]
                         hover:bg-white hover:text-black transition-all duration-500"
            >
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
