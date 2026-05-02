import { motion } from "framer-motion";
import { Phone, Calendar, UserCheck, Database, Play } from "lucide-react";

const InteractiveDemo = () => {
    return (
        <section id="demo" className="section-padding bg-background relative overflow-hidden">
            <div className="container-max">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Animated Phone UI */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative w-[300px] md:w-[380px] h-[600px] md:h-[750px] mx-auto rounded-[3rem] border-[8px] border-slate-200 bg-white shadow-2xl overflow-hidden">
                            {/* Screen Content */}
                            <div className="p-8 pt-16 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center">
                                        <Phone className="text-neon-cyan" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Incoming Call</p>
                                        <p className="text-xl font-bold text-slate-900">Fluxo AI Agent</p>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col items-center justify-center">
                                    {/* Waveform Animation */}
                                    <div className="flex items-center gap-1 h-32 mb-12">
                                        {[...Array(12)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{
                                                    height: [20, 80, 40, 100, 20].map(h => `${h}%`),
                                                }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 1.5,
                                                    delay: i * 0.1,
                                                    ease: "easeInOut"
                                                }}
                                                className="w-1.5 bg-gradient-to-t from-primary to-neon-cyan rounded-full"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-center text-slate-600 mb-8 font-medium italic">
                                        "Hello! I'm your AI assistant. How can I help you book an appointment today?"
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="glass-card rounded-2xl p-4 flex items-center gap-3 border-slate-100 bg-slate-50">
                                        <Calendar size={18} className="text-primary" />
                                        <span className="text-sm font-bold text-slate-700">Checking availability...</span>
                                    </div>
                                    <div className="glass-card rounded-2xl p-4 flex items-center gap-3 border-slate-100 bg-slate-50">
                                        <Database size={18} className="text-neon-cyan" />
                                        <span className="text-sm font-bold text-slate-700">Synced with CRM</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-blue/20 rounded-full blur-[80px] animate-glow pointer-events-none" />
                        <div className="absolute -bottom-10 -right-10 w-50 h-50 bg-neon-purple/20 rounded-full blur-[100px] animate-glow pointer-events-none" />
                    </motion.div>

                    {/* Right: Explanation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <p className="text-sm font-bold text-neon-cyan mb-4 tracking-[0.2em] uppercase">
                            See AI in Action
                        </p>
                        <h2 className="font-display text-4xl md:text-6xl font-black mb-8 leading-tight">
                            Human-Like <span className="text-gradient">Intelligence</span> at Scale
                        </h2>

                        <div className="space-y-8 mb-12">
                            {[
                                { icon: Phone, title: "AI answers calls 24/7", desc: "Never miss a single lead, even during weekends or holidays." },
                                { icon: Calendar, title: "Books appointments automatically", desc: "Direct integration with Cal.com, Calendly, and G-Suite." },
                                { icon: UserCheck, title: "Reduces missed leads", desc: "Instant follow-up reduces lead drop-off by up to 80%." },
                                { icon: Database, title: "Integrates with CRM", desc: "Data synced automatically to HubSpot, Salesforce, or Zoho." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/30 transition-all">
                                        <item.icon className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1 text-slate-900">{item.title}</h4>
                                        <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary group gap-3"
                        >
                            <Play size={20} fill="currentColor" />
                            Try Live Demo
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveDemo;
