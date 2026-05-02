import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Linkedin, Twitter, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                <Sparkles className="text-white" size={20} />
              </div>
              <span className="text-2xl font-black font-display tracking-tighter uppercase text-slate-900">FLUXO</span>
            </div>
            <p className="text-slate-600 text-lg max-w-sm mb-8 font-light leading-relaxed">
              We build AI systems, voice agents, and automation workflows that turn
              your business into a <span className="text-slate-900 font-bold">revenue machine.</span>
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-100 transition-colors shadow-sm">
                  <Icon size={18} className="text-slate-500" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li><a href="#services" className="hover:text-primary transition-colors">AI Automation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Voice Agents</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Lead Generation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">SaaS Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <a href="mailto:manzoorpalli123@gmail.com" className="hover:text-slate-900 transition-colors">manzoorpalli123@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <a href="tel:03483796500" className="hover:text-slate-900 transition-colors">03483796500</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 text-sm font-medium">
          <p>© 2024 Fluxo AI Automation Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
