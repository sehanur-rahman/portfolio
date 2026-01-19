import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate, AnimatePresence } from "framer-motion";
import { Hexagon, Github, Linkedin, Menu, X } from "lucide-react";

import profileImg from "../assets/images/profile.png";
import logo from "../assets/images/sr-logo.png";

/* ================= TYPEWRITER ================= */
const GlitchTypewriter = ({ text }) => {
    const count = useMotionValue(0);
    const [displayText, setDisplayText] = useState("");
    const letters = "#####";

    useEffect(() => {
        const controls = animate(count, text.length, {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1.5,
            onUpdate(latest) {
                const i = Math.round(latest);
                const randomChar =
                    i < text.length && i > 0
                        ? letters[Math.floor(Math.random() * letters.length)]
                        : "";
                setDisplayText(text.slice(0, i) + randomChar);
            },
        });
        return controls.stop;
    }, [text, count]);

    return (
        <span className="bg-linear-to-r from-cyan-400 via-primary to-yellow-400 bg-clip-text text-transparent whitespace-nowrap">
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="ml-1 inline-block w-1 h-10 md:h-14 bg-primary"
            />
        </span>
    );
};

/* ================= MAIN ================= */
export default function NavHero() {
    const [open, setOpen] = useState(false);

    const techLogos = [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", top: "5%", left: "5%" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", top: "80%", left: "0%" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", top: "10%", left: "85%" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", top: "75%", left: "90%" },
    ];

    const scrollToSection = (id) => {
        setOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="relative min-h-screen text-white overflow-hidden">

            {/* BACKGROUND */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-primary/5 blur-[120px]" />
            </div>

            {/* ================= NAVBAR ================= */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                    {/* LOGO */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <div className="relative w-14 h-14 flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 text-gray-500"
                            >
                                <Hexagon size={56} strokeWidth={1} />
                            </motion.div>
                            <img src={logo} className="w-10 h-10 object-contain" alt="logo" />
                        </div>
                    </motion.div>

                    {/* DESKTOP MENU */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {["about", "skills", "projects", "contact"].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className="relative group"
                            >
                                <span className="text-xs font-bold tracking-widest uppercase text-gray-300 group-hover:text-primary transition">
                                    {section}
                                </span>
                                <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-primary group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300" />
                            </button>
                        ))}

                        <button
                            onClick={() => scrollToSection("contact")}
                            className="ml-4 px-8 py-3 text-xs font-black tracking-[0.3em] border border-white/30 rounded-md
                         hover:border-primary hover:shadow-[0_0_25px_rgba(255,0,92,0.6)]
                         transition-all duration-300"
                        >
                            HIRE&nbsp;NOW
                        </button>
                    </nav>

                    {/* MOBILE HAMBURGER */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden p-2 border border-white/20 rounded-md"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* ================= MOBILE MENU ================= */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className="lg:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
                        >
                            <div className="flex flex-col px-6 py-6 gap-6">
                                {["about", "skills", "projects", "contact"].map((section) => (
                                    <button
                                        key={section}
                                        onClick={() => scrollToSection(section)}
                                        className="text-left text-sm font-bold tracking-widest uppercase text-gray-300 hover:text-primary transition"
                                    >
                                        {section}
                                    </button>
                                ))}

                                <button
                                    onClick={() => scrollToSection("contact")}
                                    className="mt-2 py-3 text-xs font-black tracking-[0.3em] border border-white/30 rounded-md
                             hover:border-primary hover:shadow-[0_0_25px_rgba(255,0,92,0.6)]
                             transition-all duration-300"
                                >
                                    HIRE&nbsp;NOW
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* ================= HERO ================= */}
            <main className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-20 pb-24">

                {/* LEFT */}
                <div className="space-y-5">
                    <p className="font-mono text-primary tracking-widest uppercase text-xs italic">
            // Available for freelance & full-time roles
                    </p>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                        <GlitchTypewriter text="Sehanur Rahman Seam" />
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-300 italic">
                        Full Stack Developer (MERN)
                    </h2>

                    <p className="text-lg text-gray-400 max-w-xl leading-relaxed border-l-4 border-primary pl-6">
                        I specialize in building scalable, high-performance web applications using the MERN stack with clean architecture and modern UI.
                    </p>

                    <div className="flex items-center gap-6 pt-6">
                        <a href="https://www.linkedin.com/in/sehanur-rahman-siam/" target="_blank" className="p-3 border border-white/20 rounded-full hover:border-primary hover:text-primary hover:shadow-[0_0_25px_rgba(255,0,92,0.6)] transition">
                            <Linkedin size={20} />
                        </a>

                        <a href="https://github.com/sehanur-rahman" target="_blank" className="p-3 border border-white/20 rounded-full hover:border-primary hover:text-primary hover:shadow-[0_0_25px_rgba(255,0,92,0.6)] transition">
                            <Github size={20} />
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white font-bold border border-white/20
             py-3 px-8 rounded-md
             hover:shadow-[0_0_25px_rgba(255,0,92,0.6)]
             transition-all inline-flex items-center"
                        >
                            View Resume
                        </a>

                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex justify-center relative">
                    <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">

                        {techLogos.map((logo, i) => (
                            <motion.div
                                key={i}
                                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute w-10 h-10 bg-white/10 p-2 rounded-lg backdrop-blur-md border border-white/20"
                                style={{ top: logo.top, left: logo.left }}
                            >
                                <img src={logo.src} className="w-full h-full" />
                            </motion.div>
                        ))}

                        <div className="absolute inset-0 rounded-full border-4 border-primary shadow-[0_0_40px_rgba(255,0,92,0.4)] overflow-hidden bg-black">
                            <img
                                src={profileImg}
                                className="w-full h-full object-cover object-[center_20%]"
                                alt="Sehanur Rahman"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
