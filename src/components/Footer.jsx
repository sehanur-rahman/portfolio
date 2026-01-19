import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Facebook,
  Heart,
  ArrowUp,
  Hexagon,
} from "lucide-react";
import logo from "../assets/images/sr-logo.png";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  /* ===== SHOW / HIDE SCROLL TO TOP ===== */
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative py-12 px-5 border-t border-white/5 overflow-hidden">
      
      {/* ===== SUBTLE GLOW ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* ===== LOGO ===== */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer mb-8"
        >
          <div className="relative w-14 h-14 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 text-gray-500"
            >
              <Hexagon size={56} strokeWidth={1} />
            </motion.div>
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          </div>
        </motion.div>

        {/* ===== DESCRIPTION ===== */}
        <p className="max-w-md text-gray-400 mb-10 text-sm leading-relaxed">
          Full-stack MERN developer focused on building scalable applications,
          clean architectures, and thoughtful user experiences.
        </p>

        {/* ===== SOCIAL LINKS ===== */}
        <div className="flex gap-5 mb-12">
          {[
            {
              icon: <Github size={20} />,
              link: "https://github.com/sehanur-rahman",
            },
            {
              icon: <Linkedin size={20} />,
              link: "https://www.linkedin.com/in/sehanur-rahman-siam/",
            },
            {
              icon: <Facebook size={20} />,
              link: "https://www.facebook.com/sehanur.rahman.siam",
            },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.08 }}
              className="p-4 rounded-2xl bg-white/5 border border-white/10
                         text-gray-400 hover:text-cyan-400 transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* ===== DIVIDER ===== */}
        <div className="w-full max-w-xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        {/* ===== COPYRIGHT ===== */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-[11px] text-gray-500 font-semibold tracking-[0.25em]">
          <span>© {new Date().getFullYear()} SEHANUR RAHMAN SEAM</span>

          <div className="flex items-center gap-2 px-5 py-2 rounded-full
                          bg-white/5 border border-white/10">
            <span>Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <Heart size={14} className="text-cyan-400 fill-cyan-400" />
            </motion.span>
            <span>by Seam</span>
          </div>
        </div>
      </div>

      {/* ===== SCROLL TO TOP ===== */}
      {showTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-50
                     w-12 h-12 rounded-full
                     bg-cyan-500 text-black
                     flex items-center justify-center
                     shadow-[0_0_20px_rgba(34,211,238,0.6)]"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  );
}
