import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Zap, Globe, ShieldCheck } from "lucide-react";

const TrustStrip = () => {
    const points = [
        { icon: Cpu, text: "AI-powered 24/7 systems" },
        { icon: Zap, text: "Built with n8n + OpenAI" },
        { icon: Globe, text: "Custom backend automation" },
        { icon: ShieldCheck, text: "Designed for scalable growth" },
    ];

    return (
        <div className="relative z-20 border-y border-slate-100 bg-slate-50 backdrop-blur-md overflow-hidden">
            <div className="container-max px-4 py-8 md:py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
                    {points.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex items-center gap-3 group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center transition-colors group-hover:border-primary/50 group-hover:bg-primary/5 shadow-sm">
                                <point.icon size={20} className="text-slate-400 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="text-xs md:text-sm font-bold text-slate-500 tracking-wide uppercase group-hover:text-slate-800 transition-colors">
                                {point.text}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative gradient line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
    );
};

export default TrustStrip;
