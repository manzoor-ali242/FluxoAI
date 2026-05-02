import { motion } from "framer-motion";

const tech = [
    { name: "OpenAI", icon: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
    { name: "n8n", icon: "https://www.vectorlogo.zone/logos/n8n/n8n-icon.svg" },
    { name: "Zapier", icon: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg" },
    { name: "Supabase", icon: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
    { name: "Stripe", icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" },
    { name: "React", icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
    { name: "WhatsApp", icon: "https://www.vectorlogo.zone/logos/whatsapp/whatsapp-icon.svg" },
    { name: "HubSpot", icon: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" },
];

const TechStack = () => {
    return (
        <section className="py-20 bg-background relative overflow-hidden border-y border-slate-100">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">
                        Powered by Advanced AI & Modern Infrastructure
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {tech.map((item, i) => (
                        <motion.img
                            key={i}
                            src={item.icon}
                            alt={item.name}
                            title={item.name}
                            className="h-8 md:h-10 w-auto object-contain hover:scale-110 transition-transform"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
