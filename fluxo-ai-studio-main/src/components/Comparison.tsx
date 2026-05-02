import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

const Comparison = () => {
    return (
        <section id="comparison" className="section-padding bg-background relative">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <p className="text-sm font-bold text-neon-cyan mb-4 tracking-[0.2em] uppercase">
                        Evolution of Efficiency
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl font-black mb-6">
                        Manual Chaos <span className="opacity-30">vs</span><br />
                        Intelligent <span className="text-gradient">Automation</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                    {/* Manual Chaos */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group"
                    >
                        <div className="h-full glass-card rounded-[2.5rem] p-12 border-destructive/10 bg-destructive/5 hover:border-destructive/20 transition-all duration-500 shadow-sm">
                            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3 text-destructive">
                                <XCircle size={32} />
                                Traditional Chaos
                            </h3>
                            <ul className="space-y-8">
                                {[
                                    "Missed calls and unrecorded leads",
                                    "Manual follow-ups that drain team energy",
                                    "Disorganized spreadsheet tracking",
                                    "Revenue lost to slow response times",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <XCircle size={20} className="text-destructive/30 mt-1 shrink-0" />
                                        <span className="text-xl text-slate-400 font-light italic line-through">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Intelligent Automation */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group"
                    >
                        <div className="h-full glass-card rounded-[2.5rem] p-12 border-slate-100 bg-white hover:border-primary/20 transition-all duration-500 shadow-lg hover:shadow-2xl">
                            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3 text-primary">
                                <CheckCircle2 size={32} />
                                Intelligent Scaling
                            </h3>
                            <ul className="space-y-8">
                                {[
                                    "AI answers instantly, 24/7/365",
                                    "Automated CRM syncing & data hygiene",
                                    "Smart lead nurturing workflows",
                                    "Revenue capture on autopilot",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 size={16} className="text-primary" />
                                        </div>
                                        <span className="text-xl text-slate-700 font-medium">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>


                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <p className="text-primary font-bold text-lg mb-2 tracking-tight">80% Faster Lead Handling</p>
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "80%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="h-full bg-gradient-to-r from-primary to-neon-cyan shadow-[0_0_10px_rgba(0,255,136,0.3)]"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
