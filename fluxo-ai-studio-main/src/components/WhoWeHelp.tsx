import { motion } from "framer-motion";
import { Hospital, BarChart3, Home, ShoppingBag, AppWindow } from "lucide-react";

const sectors = [
    { icon: Hospital, title: "Clinics", description: "Medical practices & wellness centers." },
    { icon: BarChart3, title: "Marketing Agencies", description: "Scale operations & delivery." },
    { icon: Home, title: "Real Estate", description: "Automated lead follow-ups." },
    { icon: ShoppingBag, title: "E-commerce", description: "Optimize conversion & support." },
    { icon: AppWindow, title: "SaaS Startups", description: "AI-first backends & products." },
];

const WhoWeHelp = () => {
    return (
        <section id="who-we-help" className="section-padding bg-background relative">
            <div className="container-max relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <p className="text-sm font-bold text-neon-cyan mb-4 tracking-[0.2em] uppercase">
                        Ideal Partners
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl font-black">
                        Who We <span className="text-gradient">Help</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {sectors.map((sector, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="glass-card rounded-3xl p-8 text-center flex flex-col items-center group cursor-default bg-white border-slate-100"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500 shadow-lg group-hover:shadow-primary/10">
                                <sector.icon size={32} className="text-slate-500 group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="font-display text-lg font-bold mb-3 group-hover:text-slate-900 transition-colors">{sector.title}</h3>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed group-hover:text-slate-800 transition-colors">
                                {sector.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default WhoWeHelp;
