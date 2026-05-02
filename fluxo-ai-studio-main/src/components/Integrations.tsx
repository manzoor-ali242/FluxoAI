import { motion } from "framer-motion";
import {
  Globe,
  MessageSquare,
  Users,
  Mail,
  Phone,
  Calendar,
  ShoppingCart,
  Database,
  Zap,
  Bot,
  FileText,
  BarChart3,
} from "lucide-react";

const tools = [
  { icon: Globe, name: "Websites", color: "text-blue-500" },
  { icon: MessageSquare, name: "WhatsApp", color: "text-green-500" },
  { icon: Users, name: "CRM", color: "text-purple-500" },
  { icon: Mail, name: "Email", color: "text-red-400" },
  { icon: Phone, name: "VoIP", color: "text-sky-500" },
  { icon: Calendar, name: "Calendars", color: "text-amber-500" },
  { icon: ShoppingCart, name: "E-commerce", color: "text-pink-500" },
  { icon: Database, name: "Databases", color: "text-emerald-500" },
  { icon: Zap, name: "Zapier", color: "text-orange-500" },
  { icon: Bot, name: "OpenAI", color: "text-teal-500" },
  { icon: FileText, name: "Google Sheets", color: "text-green-600" },
  { icon: BarChart3, name: "Analytics", color: "text-indigo-500" },
];

const Integrations = () => {
  return (
    <section id="integrations" className="section-padding relative">
      <div className="glow-orb w-[300px] h-[300px] bg-neon-purple bottom-0 left-0 animate-pulse-glow opacity-20" />
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
            Integrations
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Connect With Your <span className="text-gradient">Favorite Tools</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            We build automations that integrate with the tools you already use — connecting everything into one seamless workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <tool.icon size={24} className={tool.color} />
              </div>
              <span className="text-sm font-medium text-foreground">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
