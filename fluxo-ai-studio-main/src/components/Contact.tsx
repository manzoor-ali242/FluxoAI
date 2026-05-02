import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // The webhook URL is now loaded from the .env file
            const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL;

            const response = await fetch(N8N_WEBHOOK_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast({
                    title: "Message Sent!",
                    description: "Thanks for reaching out. We'll contact you within 24 hours.",
                });
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Something went wrong. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="container-max relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
                        <h2 className="font-display text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                            Ready to <span className="text-gradient">Automate?</span>
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light">
                            Fill out the form below and our team will get back to you with a custom automation strategy.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-8 rounded-3xl border-slate-200 bg-white/50 backdrop-blur-md">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Email Us</p>
                                        <a href="mailto:manzoorpalli123@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">manzoorpalli123@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Call Us</p>
                                        <a href="tel:03483796500" className="text-lg font-medium hover:text-primary transition-colors">03483796500</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Location</p>
                                        <p className="text-lg font-medium">Remote / Global</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-8 rounded-3xl border-slate-200 bg-gradient-to-br from-primary/5 to-transparent">
                            <h4 className="font-bold mb-2">Why talk to us?</h4>
                            <ul className="space-y-3">
                                {[
                                    "Free 30-minute automation audit",
                                    "Custom workflow ROI blueprint",
                                    "Direct access to AI experts",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-600">
                                        <CheckCircle size={16} className="text-neon-green" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-[2.5rem] border-slate-200 bg-white shadow-xl relative overflow-hidden">
                            <div className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-slate-50/50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-slate-50/50"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-bold text-slate-700 ml-1">Phone Number (Optional)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+92 348 3796500"
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-slate-50/50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your business goals..."
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-slate-50/50 resize-none"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                    type="submit"
                                    className={`w-full btn-primary flex items-center justify-center gap-3 py-5 text-lg font-bold shadow-lg shadow-primary/25 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    <Send size={20} />
                                </motion.button>
                            </div>

                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-neon-cyan/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default Contact;
