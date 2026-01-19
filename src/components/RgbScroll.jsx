import { motion, useScroll, useSpring } from "framer-motion";

const RGBScrollbar = () => {
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 right-0 w-1.5 h-full bg-white/5 z-[9999] pointer-events-none">
      <motion.div
        className="absolute inset-x-0 top-0 origin-top"
        style={{
          scaleY,
          height: "100%",
          background:
            "linear-gradient(to bottom, #22d3ee, #8b5cf6, #4f46e5, #22d3ee)",
          boxShadow:
            "0 0 12px rgba(34,211,238,0.45), 0 0 24px rgba(139,92,246,0.25)",
        }}
      />
    </div>
  );
};

export default RGBScrollbar;
