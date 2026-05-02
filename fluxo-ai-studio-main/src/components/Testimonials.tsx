import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, GrowthFirst Agency",
    content: "Fluxo completely transformed our lead generation. We went from 20 leads a month to over 200 — all on autopilot.",
    avatar: "SM",
  },
  {
    name: "Dr. Amir Hassan",
    role: "Founder, MedClinic Pro",
    content: "Their AI voice agent handles 80% of our appointment bookings. Our front desk team can finally focus on patients.",
    avatar: "AH",
  },
  {
    name: "Jessica Wang",
    role: "COO, ShopScale",
    content: "The n8n workflows Fluxo built saved us 30+ hours a week. The ROI was immediate and the team was incredible to work with.",
    avatar: "JW",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="glow-orb w-[300px] h-[300px] bg-primary bottom-0 left-1/2 -translate-x-1/2 animate-glow" />
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
            Testimonials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 text-sm leading-relaxed mb-6">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
