import { motion } from "framer-motion";
import { MessageSquare, Settings, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Strategy Call",
    description: "We dive deep into your business goals, bottlenecks, and manual processes to identify high-ROI automation opportunities.",
  },
  {
    icon: Settings,
    title: "System Design",
    description: "Our experts architect a custom AI & automation stack using industry-leading tools like n8n, OpenAI, and custom backend integrations.",
  },
  {
    icon: Rocket,
    title: "Automation Launch",
    description: "We deploy, test, and optimize your systems, turning your operations into a smooth, revenue-generating machine on autopilot.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white relative">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <p className="text-sm font-bold text-neon-cyan mb-4 tracking-[0.2em] uppercase">
            Our Process
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6">
            Simple 3-Step <span className="text-gradient">Activation</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From initial strategy to full-scale automation, we handle the complexity for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-10 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all duration-500 relative shadow-sm">
                <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-black shadow-lg text-white">0{i + 1}</span>
                <step.icon size={32} className="text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-5 tracking-tight group-hover:text-slate-900 transition-colors text-slate-800">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center"
        >
          <a href="#cta" className="inline-flex items-center gap-3 text-neon-cyan font-bold text-lg hover:underline transition-all">
            Start Your Transformation
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
