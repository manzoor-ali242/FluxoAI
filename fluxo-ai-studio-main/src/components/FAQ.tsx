import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What kind of businesses do you work with?",
    answer: "We work with startups, clinics, agencies, e-commerce brands, and local businesses. If you have repetitive processes or want to generate leads on autopilot, we can help.",
  },
  {
    question: "How long does it take to build an AI system?",
    answer: "Most custom AI automation systems are designed and deployed within 2-4 weeks, depending on the complexity of your current infrastructure.",
  },
  {
    question: "Is AI voice reliable for handling customer calls?",
    answer: "Yes, we use advanced LLMs (like GPT-4o) combined with low-latency voice engines to ensure human-like conversation flow and 98% accuracy in data capture.",
  },
  {
    question: "Will these systems integrate with my current CRM?",
    answer: "Absolutely. We specialize in deep integrations with HubSpot, Salesforce, GoHighLevel, Zoho, and any other system with an API.",
  },
  {
    question: "Do I need technical knowledge to manage these tools?",
    answer: "No. We build 'set and forget' systems. If you need changes, our long-term support team handles everything for you.",
  },
  {
    question: "What is the typical ROI for your automation builds?",
    answer: "Clients typically see operational efficiency gains of 30-50% and a full ROI within the first 3 months by capturing missed leads and reducing manual labor.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-background relative">
      <div className="container-max max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-bold text-neon-cyan mb-4 tracking-[0.2em] uppercase">
            Questions?
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6">
            Frequently <span className="text-gradient">Asked</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border-slate-100 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="text-xl font-bold tracking-tight pr-8 text-slate-800">{faq.question}</span>
                <div className={`shrink-0 w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-primary border-primary rotate-180 text-white' : 'text-slate-400'}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-slate-500 leading-relaxed font-medium text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
