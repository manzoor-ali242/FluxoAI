import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { TrendingUp, AlertCircle, PhoneOff, ArrowRight } from "lucide-react";

const ROICalculator = () => {
    const [missedCalls, setMissedCalls] = useState(5);
    const [leadValue, setLeadValue] = useState(500);

    const monthlyLoss = missedCalls * 30 * leadValue;

    // Counter animation
    const count = useMotionValue(0);
    const rounded = useSpring(count, { stiffness: 100, damping: 30 });

    useEffect(() => {
        count.set(monthlyLoss);
    }, [monthlyLoss, count]);

    return (
        <section id="roi" className="section-padding bg-background relative">
            <div className="container-max">
                <div className="glass-card rounded-[3rem] p-10 lg:p-20 border-slate-100 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden shadow-2xl">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-purple/5 blur-[100px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-left">
                            <p className="text-sm font-bold text-neon-cyan mb-4 tracking-[0.2em] uppercase">
                                The Cost of Inaction
                            </p>
                            <h2 className="font-display text-4xl md:text-6xl font-black mb-8 leading-tight">
                                How Much Revenue<br />
                                Are You <span className="text-destructive drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">Losing?</span>
                            </h2>
                            <p className="text-slate-600 text-lg mb-12 font-light leading-relaxed">
                                Every missed call is a missed opportunity. Our AI system ensures
                                every potential customer is captured, nurtured, and converted.
                            </p>

                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm font-bold uppercase tracking-wider">
                                        <span>Missed Calls per Day</span>
                                        <span className="text-neon-cyan">{missedCalls} calls</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="50"
                                        value={missedCalls}
                                        onChange={(e) => setMissedCalls(parseInt(e.target.value))}
                                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm font-bold uppercase tracking-wider">
                                        <span>Average Lead Value</span>
                                        <span className="text-neon-cyan">${leadValue}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="100"
                                        max="5000"
                                        step="100"
                                        value={leadValue}
                                        onChange={(e) => setLeadValue(parseInt(e.target.value))}
                                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="glass-card bg-white border-slate-200 rounded-[2.5rem] p-12 text-center shadow-2xl relative z-10">
                                <div className="w-20 h-20 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-center justify-center mx-auto mb-8">
                                    <PhoneOff className="text-destructive" size={40} />
                                </div>
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2">Estimated Monthly Revenue Loss</p>
                                <motion.div className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
                                    $<motion.span>{monthlyLoss.toLocaleString()}</motion.span>
                                </motion.div>

                                <div className="pt-8 border-t border-slate-100 space-y-4 text-left">
                                    <div className="flex items-center gap-3 text-neon-cyan font-bold">
                                        <TrendingUp size={20} />
                                        <span>Our AI system captures 98% of these calls.</span>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Stop the bleed and start scaling with intelligent automation that works 24/7.
                                    </p>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary w-full mt-10 gap-2"
                                >
                                    Regain This Revenue Now
                                    <ArrowRight size={20} />
                                </motion.button>
                            </div>

                            {/* Accents */}
                            <div className="absolute -top-6 -right-6 w-12 h-12 bg-neon-cyan rounded-full blur-[40px] opacity-10 animate-pulse" />
                            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-neon-green rounded-full blur-[60px] opacity-10 animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;
