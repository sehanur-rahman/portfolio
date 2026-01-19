import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollY } = useScroll();

  // Parallax movement (very subtle)
  const ySlow = useTransform(scrollY, [0, 1200], [0, -120]);
  const yFast = useTransform(scrollY, [0, 1200], [0, -240]);

  const smoothSlow = useSpring(ySlow, { stiffness: 40, damping: 20 });
  const smoothFast = useSpring(yFast, { stiffness: 60, damping: 25 });

  return (
    <motion.div
      className="fixed inset-0 -z-50 overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      {/* ===== BASE GRADIENT ===== */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(34,211,238,0.08), transparent 50%), radial-gradient(circle at bottom right, rgba(139,92,246,0.08), transparent 55%)",
          filter: "contrast(1.1)",
        }}
      />

      {/* ===== SLOW MOVING FOG LAYER ===== */}
      <motion.div
        style={{ y: smoothSlow }}
        className="absolute -inset-[20%] opacity-60"
      >
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.04), transparent 60%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.03), transparent 65%)",
            filter: "blur(120px)",
          }}
        />
      </motion.div>

      {/* ===== FASTER DEPTH LAYER ===== */}
      <motion.div
        style={{ y: smoothFast }}
        className="absolute -inset-[30%] opacity-40"
      >
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(circle at 60% 30%, rgba(34,211,238,0.08), transparent 55%), radial-gradient(circle at 20% 70%, rgba(168,85,247,0.08), transparent 55%)",
            filter: "blur(160px)",
          }}
        />
      </motion.div>

      {/* ===== NOISE TEXTURE (VERY SUBTLE) ===== */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"200\" height=\"200\" filter=\"url(%23n)\"/></svg>')",
        }}
      />

      {/* ===== VIGNETTE ===== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(5,5,5,0.9) 100%)",
        }}
      />
    </motion.div>
  );
}
