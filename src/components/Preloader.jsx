import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* ===== SUBTLE SCAN LINE ===== */}
          <motion.div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
            animate={{ y: ["0%", "100vh"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          />

          {/* ===== CENTER SYSTEM ===== */}
          <div className="relative flex flex-col items-center gap-8">
            
            {/* ===== RING SYSTEM ===== */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-cyan-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner Dashed Ring */}
              <motion.div
                className="absolute inset-6 rounded-full border border-dashed border-white/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />

              {/* Core */}
              <div className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
            </div>

            {/* ===== NAME ===== */}
            <div className="flex gap-1">
              {"SEAM".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-xl font-black tracking-tight text-white"
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* ===== SYSTEM TEXT ===== */}
            <motion.div
              className="flex items-center gap-2 text-[10px] font-mono tracking-[0.4em] uppercase text-cyan-400/70"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Initializing System
              <span className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1 h-1 bg-cyan-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </span>
            </motion.div>
          </div>

          {/* ===== PROGRESS BARS (MINIMAL) ===== */}
          <div className="absolute bottom-12 flex gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-10 h-[2px] bg-white/10 overflow-hidden"
              >
                <motion.div
                  className="h-full bg-cyan-400"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
