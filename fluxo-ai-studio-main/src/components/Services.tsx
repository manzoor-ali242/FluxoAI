import { motion } from "framer-motion";
import { Bot, Phone, Target, Globe, Workflow, Rocket } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Automate repetitive operations using AI and enterprise-grade workflow systems.",
  },
  {
    icon: Phone,
    title: "AI Voice Agents",
    description: "Human-like AI that answers calls 24/7, books appointments, and handles support.",
  },
  {
    icon: Target,
    title: "Lead Generation Systems",
    description: "Automated cold outreach, multi-channel funnels, and CRM pipelines.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "High-converting, modern websites designed for exponential business growth.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Custom backend automation connecting all your tools via n8n and Zapier.",
  },
  {
    icon: Rocket,
    title: "SaaS & AI Products",
    description: "Scaling AI-powered products from initial concept to a global audience.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative bg-white overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] bg-neon-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <p className="text-sm font-bold text-neon-cyan mb-4 tracking-[0.2em] uppercase">
            Core Expertise
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6">
            What We <span className="text-gradient">Build</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Cutting-edge AI solutions tailored to your unique scaling needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-px rounded-4xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glass-card rounded-4xl p-10 h-full flex flex-col border-slate-100 bg-white hover:bg-slate-50 transition-all duration-500 group-hover:border-primary/20 group-hover:-translate-y-2 shadow-sm group-hover:shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] transition-all duration-500">
                  <service.icon size={30} className="text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 tracking-tight group-hover:text-slate-900 transition-colors">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light group-hover:text-slate-700 transition-colors">
                  {service.description}
                </p>
                {/* Decorative element */}
                <div className="mt-10 mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="text-xs font-bold text-neon-cyan tracking-widest uppercase">Learn More →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
