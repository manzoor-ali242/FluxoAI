import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, RotateCcw, Loader2 } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "👋 Welcome to Fluxo AI! I'm your automation expert. How can I help you scale your business today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `You are the Fluxo AI assistant, a professional, concise, and helpful automation expert.

COMPANY OVERVIEW:
- Name: Fluxo AI Automation Agency
- Tagline: Automate. Scale. Dominate.
- Mission: Build AI systems, voice agents, and automation workflows that turn businesses into revenue machines.
- Contact: manzoorpalli123@gmail.com | 03483796500
- Clients Served: 20+ businesses

SERVICES (Respond conversationally like this):
We specialize in 6 core areas:

- AI Automation — eliminate manual tasks
- AI Voice Agents — 24/7 call handling & booking
- Lead Generation — automated outreach & CRM
- Web Development — high-converting sites
- Workflow Automation — n8n & Zapier integrations
- SaaS & AI Products — scaling AI products globally

WHO WE WORK WITH:
Clinics, Wellness Centers, Marketing Agencies, Real Estate, E-commerce, and SaaS Startups.

TECH STACK:
OpenAI, n8n, Zapier, Supabase, Stripe, React, WhatsApp, HubSpot.

PROCESS (3 Steps):
1. Strategy Call: Identify high-ROI opportunities.
2. System Design: Architecting the AI/automation stack.
3. Launch: Deploy, test, and optimize.

RESULTS:
- 80% faster lead handling.
- Captures 98% of incoming calls.
- Revenue loss context: Missing 5 calls/day (~$500/lead) = $75k monthly loss. Fluxo captures 98% of this.

FAQs:
- Build time: 1-2 weeks for full systems, a few days for simple automations.
- Reliability: Voice agents are human-like and 24/7.
- Integrations: HubSpot, Salesforce, Zoho, etc.
- Technical Knowledge: None needed; we handle handover and support.
- ROI: Most clients recover investment in 1 month.

RESPONSE FORMAT RULES:
- Keep responses short and conversational (max 3-4 lines per reply).
- Do NOT send all services in one message unless specifically asked for "all services".
- Never use markdown symbols like ** or ##. Use plain text only.
- Use plain line breaks only for spacing.
- Ask one question at a time to qualify the lead.
- Guide conversation toward booking a call.

BEHAVIOR RULES:
- If asked about pricing, say: "Pricing depends on your specific requirements. Book a free 15-minute strategy call and we'll give you a clear scope and quote."
- To book a call: Direct them to email manzoorpalli123@gmail.com or call/WhatsApp 03483796500.
- Outside scope: Say: "Great question — that's best answered on a quick call with our team. Want me to help you book one?"
- Never make up features or guarantees.
- Always end with a soft CTA to book a strategy call.`
            },
            ...messages,
            userMessage
          ],
        }),
      });

      const data = await response.json();
      const assistantMessage = {
        role: "assistant",
        content: data.choices[0].message.content
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling OpenAI:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I'm having trouble connecting right now. Please try again later." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = () => {
    setMessages([
      { role: "assistant", content: "👋 Hey! Welcome to Fluxo. How can we help you automate your business today?" }
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-80 sm:w-96 rounded-3xl border border-border bg-card shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center overflow-hidden border border-white/10">
                  <MessageCircle size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">Fluxo AI</p>
                  <p className="text-xs text-primary-foreground/70">Online • We reply instantly</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleRefresh}
                  className="p-1.5 text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10 rounded-lg transition-colors"
                  title="Refresh conversation"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat body */}
            <div
              ref={scrollRef}
              className="h-80 p-4 overflow-y-auto space-y-4 bg-muted/30 scroll-smooth"
            >
              {messages.map((msg, index) => (
                <div key={index} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 border border-primary/5">
                      <MessageCircle size={14} className="text-primary" />
                    </div>
                  )}
                  <div className={`px-4 py-3 text-sm max-w-[85%] shadow-sm ${msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-2xl rounded-tr-none"
                    : "bg-card border border-border text-foreground rounded-2xl rounded-tl-none"
                    }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Loader2 size={14} className="text-primary animate-spin" />
                  </div>
                  <div className="bg-card border border-border rounded-2xl rounded-tl-none px-4 py-3 text-sm text-foreground/50">
                    Thinking...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border bg-card">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 rounded-xl border border-border bg-muted/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-all shrink-0 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 25px hsl(var(--primary) / 0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center hover:opacity-95 transition-all relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
