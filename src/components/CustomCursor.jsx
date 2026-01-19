import { useEffect, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Physics profiles
  const dotSpring = { damping: 45, stiffness: 900, mass: 0.08 };
  const haloSpring = { damping: 28, stiffness: 200, mass: 0.6 };

  const dotX = useSpring(mouseX, dotSpring);
  const dotY = useSpring(mouseY, dotSpring);

  const haloX = useSpring(mouseX, haloSpring);
  const haloY = useSpring(mouseY, haloSpring);

  const handleMouseMove = useCallback(
    (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* ===== OUTER HALO (FLOATY, PREMIUM) ===== */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border border-white/20"
        style={{
          x: haloX,
          y: haloY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 60%)",
          boxShadow:
            "inset -2px -2px 6px rgba(255,255,255,0.08), 0 8px 20px rgba(0,0,0,0.35)",
          backdropFilter: "blur(1.5px)",
        }}
      >
        {/* Specular highlight */}
        <span className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-white/40 blur-[0.5px]" />
      </motion.div>

      {/* ===== CORE DOT (PRECISE POINTER) ===== */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow:
            "0 0 10px rgba(34,211,238,0.8), 0 0 25px rgba(34,211,238,0.4)",
        }}
      />
    </div>
  );
}
