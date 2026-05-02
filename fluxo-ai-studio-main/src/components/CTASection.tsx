import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-neon-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-10 sm:p-16 lg:p-20 text-center gradient-border"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build Your{" "}
            <span className="text-gradient">AI System</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Let's design an automation strategy that fits your business. No fluff,
            just results.
          </p>
          <a
            href="mailto:manzoorpalli123@gmail.com"
            className="group inline-flex items-center gap-2 rounded-xl px-10 py-4 text-base font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-[0_0_40px_hsl(220_90%_56%/0.3)]"
          >
            Book Free Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
