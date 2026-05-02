import { motion } from "framer-motion";
import { Zap, Puzzle, Brain, Layers, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Execution", description: "From strategy to launch in weeks, not months." },
  { icon: Puzzle, title: "Custom Solutions", description: "No cookie-cutter templates. Built for your business." },
  { icon: Brain, title: "Future-Ready AI", description: "Leveraging the latest in AI and machine learning." },
  { icon: Layers, title: "Scalable Architecture", description: "Systems that grow with your business." },
  { icon: HeartHandshake, title: "Long-Term Support", description: "We're partners, not just vendors." },
];

const WhyFluxo = () => {
  return (
    <section id="why-fluxo" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
            Why Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Why <span className="text-gradient">Fluxo</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 text-center group hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFluxo;
