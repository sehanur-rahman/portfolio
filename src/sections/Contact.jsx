import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  ExternalLink,
  Zap,
} from "lucide-react";

export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen px-5 py-24 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        {/* ===== TOP TITLE ===== */}
        <div className="text-center mb-20">
          <motion.h2
            variants={item}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Let’s <span className="text-cyan-400">Connect</span>
          </motion.h2>
          <motion.p
            variants={item}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? I’m always open to
            discussing new ideas and opportunities.
          </motion.p>
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ===== LEFT: CONTACT CARDS ===== */}
          <div className="space-y-8">
            {/* Email */}
            <motion.div variants={item}>
              <a
                href="mailto:alifmahmud.dev@gmail.com"
                className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-cyan-500/40 to-transparent block"
              >
                <div className="bg-[#0a0a0a] rounded-[1.45rem] p-8 flex items-center gap-6 border border-white/5">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500 transition-all">
                    <Mail className="text-cyan-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono uppercase">
                      Email
                    </p>
                    <h3 className="text-xl font-bold">
                      sehanurrahmansiam@gmail.com
                    </h3>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div variants={item}>
              <a
                href="tel:+8801610438236"
                className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-purple-500/40 to-transparent block"
              >
                <div className="bg-[#0a0a0a] rounded-[1.45rem] p-8 flex items-center gap-6 border border-white/5">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500 transition-all">
                    <Phone className="text-purple-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono uppercase">
                      Phone
                    </p>
                    <h3 className="text-xl font-bold">+880 1842268443</h3>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* WhatsApp */}
            <motion.div variants={item}>
              <a
                href="https://wa.me/8801610438236"
                target="_blank"
                rel="noreferrer"
                className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-emerald-500/40 to-transparent block"
              >
                <div className="bg-[#0a0a0a] rounded-[1.45rem] p-8 flex items-center gap-6 border border-white/5">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 transition-all">
                    <MessageCircle className="text-emerald-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono uppercase">
                      WhatsApp
                    </p>
                    <h3 className="text-xl font-bold">+880 1522111506</h3>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* ===== RIGHT: FORM ===== */}
          <motion.div
            variants={item}
            className="relative p-10 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500 rounded-br-xl" />

            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="text-yellow-400" size={20} /> Send Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 outline-none"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full bg-white text-black font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* ===== BOTTOM AVAILABILITY ===== */}
        <motion.div
          variants={item}
          className="mt-24 mx-auto w-fit bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full"
        >
          <p className="flex items-center gap-3 text-gray-300">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Available for new projects & collaborations
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
