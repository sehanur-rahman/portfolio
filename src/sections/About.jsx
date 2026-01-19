import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";

export default function About() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section
            id="about"
            className="relative min-h-screen flex flex-col justify-center px-6 py-24 text-white"
        >
            {/* ===== SECTION TITLE ===== */}
            <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center text-5xl md:text-6xl font-black mb-20
        bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400
        bg-clip-text text-transparent"
            >
                About Me
            </motion.h2>

            {/* ===== CONTENT ===== */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* ===== LEFT : IMAGE ===== */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full h-160 overflow-hidden rounded-2xl
          border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
                >
                    <img
                        src={profile}
                        alt="Sehanur Rahman Seam"
                        className="w-full h-full object-cover object-[center_20%]"
                    />
                </motion.div>

                {/* ===== RIGHT : TEXT ===== */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-6 text-lg text-gray-300 leading-relaxed"
                >
                    <p>
                        Hello! I’m{" "}
                        <span className="text-cyan-400 font-bold">
                            Sehanur Rahman Seam
                        </span>
                        , a passionate{" "}
                        <span className="italic font-semibold text-purple-400">
                            MERN Stack Developer
                        </span>{" "}
                        who enjoys building scalable, high-performance web applications with
                        clean architecture and modern UI.
                    </p>

                    <p>
                        My core expertise includes{" "}
                        <span className="font-semibold text-cyan-400">
                            JavaScript, React, Node.js, Express, and MongoDB
                        </span>
                        . I focus on writing maintainable code, reusable components, and
                        delivering seamless user experiences across all devices.
                    </p>

                    <p>
                        I love working on challenging problems, learning emerging
                        technologies, and continuously improving my development workflow.
                        Beyond coding, I enjoy{" "}
                        <span className="text-pink-400 font-semibold">
                            traveling, exploring new ideas, and self-growth
                        </span>
                        .
                    </p>

                    {/* ===== SKILL TAGS ===== */}
                    <div className="flex flex-wrap gap-4 pt-6 ">
                        {[
                            "MERN Stack",
                            "React",
                            "Node.js",
                            "MongoDB",
                            "Next.js",
                            "Tailwind CSS",
                        ].map((item, i) => (
                            <span
                                key={i}
                                className="px-6 py-2 text-sm font-bold rounded-full
                bg-white/10 border border-white/20
                hover:border-primary hover:text-primary transition hover:shadow-[0_0_25px_rgba(255,0,92,0.6)]"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
