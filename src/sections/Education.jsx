import { motion } from "framer-motion";
import { FaGraduationCap, FaAtom } from "react-icons/fa";

/* ===== ANIMATION VARIANTS ===== */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ===== BADGE STYLE MAP ===== */
const badgeStyle = {
  cyan: "border-cyan-500/40 text-cyan-400",
  purple: "border-purple-500/40 text-purple-400",
  emerald: "border-emerald-500/40 text-emerald-400",
  pink: "border-pink-500/40 text-pink-400",
};

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-6 px-6 text-white overflow-hidden flex items-center justify-center"
    >
      {/* ===== SUBTLE BACKGROUND ELEMENT ===== */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-24 right-[15%] text-7xl text-cyan-400/10 pointer-events-none"
      >
        <FaAtom />
      </motion.div>

      {/* ===== GLASS CARD ===== */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="
          relative max-w-5xl mx-auto
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-[2rem]
          shadow-[0_20px_50px_rgba(0,0,0,0.55)]
          p-10 md:p-16
        "
      >
        {/* ===== HEADER ===== */}
        <motion.div
          variants={item}
          className="flex flex-col items-center mb-20 text-center"
        >
          <div className="p-4 mb-6 rounded-xl border border-cyan-400/20 bg-cyan-400/10">
            <FaGraduationCap className="text-4xl text-cyan-400" />
          </div>

          <h2
            className="
              text-4xl md:text-5xl font-black tracking-widest uppercase
              bg-gradient-to-r from-teal-400 via-sky-500 to-violet-500
              bg-clip-text text-transparent
            "
          >
            Education
          </h2>

          <p className="mt-6 max-w-xl text-gray-400 text-lg">
            A strong academic foundation that shapes my problem-solving mindset
            and engineering approach.
          </p>
        </motion.div>

        {/* ===== CONTENT ===== */}
        <motion.div variants={item} className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            Bachelor of Science in{" "}
            <span className="text-cyan-400 italic">
              Computer Science & Engineering
            </span>
          </h3>

          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            I am currently pursuing my Bachelor of Science degree in{" "}
            <span className="font-semibold text-cyan-400">
              Computer Science & Engineering (CSE)
            </span>{" "}
            at{" "}
            <span className="text-white font-semibold">
              Northern University Bangladesh
            </span>
            . My academic journey has strengthened my understanding of core
            computer science concepts and modern software development practices.
          </p>

          {/* ===== QUOTE / HIGHLIGHT ===== */}
          <div className="border-l-4 border-purple-500 pl-6 py-4 bg-white/[0.03] rounded-xl text-gray-200 italic max-w-3xl">
            “Studying CSE has sharpened my{" "}
            <span className="text-cyan-400 font-semibold">
              problem-solving ability
            </span>
            ,{" "}
            <span className="text-cyan-400 font-semibold">
              algorithmic thinking
            </span>{" "}
            and understanding of{" "}
            <span className="text-cyan-400 font-semibold">
              software engineering principles
            </span>
            —skills I actively apply while building real-world MERN applications.”
          </div>

          {/* ===== ACADEMIC FOCUS ===== */}
          <div className="pt-6">
            <p className="mb-4 text-gray-400 font-medium uppercase tracking-widest text-sm">
              Key Academic Focus
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { label: "Data Structures", color: "cyan" },
                { label: "Algorithms", color: "purple" },
                { label: "Software Engineering", color: "emerald" },
                { label: "Web Technologies", color: "pink" },
              ].map((b, i) => (
                <span
                  key={i}
                  className={`px-5 py-2 rounded-full border text-xs font-bold uppercase tracking-widest
                    ${badgeStyle[b.color]} bg-white/[0.02]`}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
