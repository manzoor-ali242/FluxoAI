import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// New component imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import WhoWeHelp from "./components/WhoWeHelp";
import Services from "./components/Services";
import InteractiveDemo from "./components/InteractiveDemo";
import Comparison from "./components/Comparison";
import ROICalculator from "./components/ROICalculator";
import HowItWorks from "./components/HowItWorks";
import TechStack from "./components/TechStack";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Testimonials from "./components/Testimonials";
import Results from "./components/Results";
import WhyFluxo from "./components/WhyFluxo";
import Contact from "./components/Contact";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Define the new Index component content
const NewIndexContent = () => (
  <main className="bg-background text-foreground selection:bg-primary/30 min-h-screen">
    <Navbar />
    <Hero />
    <TrustStrip />
    <WhoWeHelp />
    <WhyFluxo />
    <Services />
    <InteractiveDemo />
    <Comparison />
    <Results />
    <Testimonials />
    <ROICalculator />
    <HowItWorks />
    <TechStack />
    <FAQ />
    <Contact />
    <CTA />
    <Footer />
    <Chatbot />
  </main>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewIndexContent />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
