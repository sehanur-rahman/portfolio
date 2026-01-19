import React, { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiFigma,
} from "react-icons/si";

/* ================= NEON ORBS ================= */
const neonOrbs = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  size: Math.floor(Math.random() * 6) + 4,
  duration: 15 + (i % 5) * 5,
  color:
    i % 2 === 0
      ? "shadow-[0_0_15px_#2dd4bf] bg-teal-400"
      : "shadow-[0_0_15px_#a855f7] bg-violet-500",
  startX: `${(i * 17) % 100}%`,
  startY: `${(i * 23) % 100}%`,
  moveX: [0, 120, -120, 0],
  moveY: [0, -160, 160, 0],
}));

/* ================= MAGNETIC ICON ================= */
function MagneticIcon({ icon, name, index }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dx = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const dy = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const distX = e.clientX - cx;
    const distY = e.clientY - cy;
    const radius = 220;
    const dist = Math.sqrt(distX ** 2 + distY ** 2);

    if (dist < radius) {
      mouseX.set(distX * 0.4);
      mouseY.set(distY * 0.4);
    } else {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="group relative flex flex-col items-center justify-center p-8"
    >
      <motion.div
        ref={ref}
        style={{ x: dx, y: dy }}
        animate={{ y: [0, -14, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.1,
        }}
        whileHover={{ scale: 1.4 }}
        className="text-5xl md:text-7xl text-white/40 group-hover:text-inherit
                   cursor-pointer transition-all duration-300
                   group-hover:drop-shadow-[0_0_20px_rgba(45,212,191,0.8)]"
      >
        {icon}
      </motion.div>

      <p className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300
                    text-teal-400 text-[10px] md:text-[12px]
                    font-bold tracking-widest uppercase">
        {name}
      </p>
    </div>
  );
}

/* ================= SKILL GROUP ================= */
function SkillGroup({ title, skills, center = false }) {
  return (
    <div className="mb-14">
      <h3 className="mb-10 text-center text-xl md:text-2xl font-black uppercase tracking-[0.3em]
                     bg-gradient-to-r from-teal-400 to-violet-500
                     bg-clip-text text-transparent">
        {title}
      </h3>

      <div className="flex justify-center">
        <div
          className={`grid gap-6 ${
            center
              ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-4"
              : "grid-cols-3 sm:grid-cols-4 md:grid-cols-6"
          }`}
        >
          {skills.map((skill, i) => (
            <MagneticIcon
              key={i}
              index={i}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= MAIN ================= */
export default function Skills() {
  const frontend = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  ];

  return (
    <section id="skills" className="relative py-20 overflow-hidden text-white">
      {/* ===== FLOATING ORBS ===== */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {neonOrbs.map((orb) => (
          <motion.div
            key={orb.id}
            initial={{ left: orb.startX, top: orb.startY }}
            animate={{
              x: orb.moveX,
              y: orb.moveY,
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute rounded-full ${orb.color}`}
            style={{ width: orb.size, height: orb.size }}
          />
        ))}
      </div>

      {/* ===== TITLE (TEXT ONLY, GRADIENT FLOW) ===== */}
      <motion.h2
        className="text-center mb-32
                   text-4xl md:text-5xl font-black tracking-widest uppercase
                   bg-gradient-to-r from-teal-400 via-sky-500 via-violet-500 to-rose-500
                   bg-[length:300%_100%]
                   bg-clip-text text-transparent"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        My Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto px-4">
        <SkillGroup title="Frontend" skills={frontend} />
        <SkillGroup title="Backend" skills={backend} center />
        <SkillGroup title="Tools & Others" skills={tools} center />
      </div>
    </section>
  );
}
