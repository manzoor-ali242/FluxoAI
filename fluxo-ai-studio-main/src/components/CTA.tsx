import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
    return (
        <section id="cta" className="section-padding bg-background relative overflow-hidden">
            <div className="container-max relative z-10">
                <div className="glass-card rounded-[4rem] p-12 md:p-24 border-slate-200 bg-gradient-to-br from-primary/10 via-white to-white relative overflow-hidden text-center">
                    {/* Animated Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-primary/10 blur-[120px] rounded-full animate-glow pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 mb-8 glass-card bg-white">
                            <Sparkles size={16} className="text-neon-cyan" />
                            <span className="text-xs sm:text-sm font-bold text-slate-600 tracking-tight">
                                Limited capacity for Q1 2024
                            </span>
                        </div>

                        <h2 className="font-display text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
                            Ready to Build Your<br />
                            <span className="text-gradient drop-shadow-[0_0_30px_rgba(157,0,255,0.4)]">AI System?</span>
                        </h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-slate-600 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-12"
                        >
                            Stop manual labor. Start scaling. Let’s automate your growth and
                            turn your business into a <span className="text-slate-900 font-bold">revenue machine.</span>
                        </motion.p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-primary flex items-center gap-2 text-xl px-12 py-5"
                            >
                                Book Free Consultation
                                <ArrowRight size={24} />
                            </motion.button>
                        </div>

                        <p className="mt-8 text-slate-500 text-sm font-bold uppercase tracking-wider">
                            Join 20+ forward-thinking businesses scaling with Fluxo AI.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Background orbs */}
            <div className="glow-orb w-[400px] h-[400px] bg-neon-cyan/5 bottom-[-10%] left-[-10%]" />
            <div className="glow-orb w-[400px] h-[400px] bg-neon-green/5 top-[-10%] right-[-10%]" />
        </section>
    );
};

export default CTA;
