import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Clock, CalendarCheck, DollarSign } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 300, suffix: "%", label: "Increase in Leads" },
  { icon: Clock, value: 80, suffix: "%", label: "Less Manual Work" },
  { icon: CalendarCheck, value: 10, suffix: "x", label: "Faster Booking" },
  { icon: DollarSign, value: 150, suffix: "%", label: "Revenue Growth" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
};

const Results = () => {
  return (
    <section id="results" className="section-padding relative">
      <div className="glow-orb w-[400px] h-[400px] bg-neon-cyan bottom-0 left-1/2 -translate-x-1/2 animate-glow" />
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
            Impact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Real <span className="text-gradient">Results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 sm:p-8 text-center"
            >
              <stat.icon size={28} className="text-primary mx-auto mb-4" />
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
