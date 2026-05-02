import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    title: "AI-Powered Dashboards",
    description: "Real-time analytics and intelligent data processing"
  },
  {
    url: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    title: "Seamless Integrations",
    description: "Connecting n8n, Zapier, and your entire stack"
  },
  {
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    title: "Workflow Automation",
    description: "Custom backend systems built for scale"
  },
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    title: "Business Scaling",
    description: "Automating manual chaos into revenue machines"
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl bg-gradient-hero opacity-30" />
        <div className="glow-orb w-[600px] h-[600px] bg-neon-green/5 top-[-10%] left-[-10%]" />
        <div className="glow-orb w-[500px] h-[500px] bg-neon-cyan/10 bottom-[-10%] right-[-10%]" />
      </div>

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center mt-[-5vh]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 mb-8 glass-card bg-white shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse shadow-[0_0_10px_#00ff88]" />
            <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-tight">
              Leading AI & Automation Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8"
          >
            Automate. Scale.<br />
            <span className="text-gradient drop-shadow-[0_0_20px_rgba(0,255,136,0.2)]">Dominate.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-lg sm:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light"
          >
            We build AI systems, voice agents, and automation workflows that
            turn your business into a <span className="text-slate-900 font-bold">revenue machine.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 space-y-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="#cta"
                className="btn-primary flex items-center gap-2 text-lg px-10 group"
              >
                Book Free Strategy Call
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="btn-secondary flex items-center gap-2 text-lg px-10 text-slate-900 border-slate-200"
              >
                <Play size={18} fill="currentColor" />
                See Our Work
              </a>
            </div>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">
              15-minute call. No pressure.
            </p>
          </motion.div>
        </motion.div>

        {/* Floating Mockup Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 relative max-w-5xl mx-auto px-4"
        >
          <div className="relative glass-card rounded-[2.5rem] p-4 border-slate-200 bg-white shadow-2xl overflow-hidden group">
            <div className="rounded-[1.5rem] bg-slate-100 aspect-video overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={carouselImages[currentIndex].url}
                    alt={carouselImages[currentIndex].title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-left"
                    >
                      <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md rounded-full px-3 py-1 mb-4 border border-primary/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                          {carouselImages[currentIndex].title}
                        </span>
                      </div>
                      <h4 className="text-white text-3xl font-black drop-shadow-lg max-w-lg leading-tight">
                        {carouselImages[currentIndex].description}
                      </h4>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicators */}
              <div className="absolute bottom-10 right-10 flex gap-2 z-20">
                {carouselImages.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? "w-8 bg-primary" : "w-1.5 bg-white/30"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Subtle Particles/Accents */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon-green/10 rounded-full blur-3xl animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
