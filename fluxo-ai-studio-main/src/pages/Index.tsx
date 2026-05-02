import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import WhyFluxo from "@/components/WhyFluxo";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Results />
      <WhyFluxo />
      <Integrations />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
      <Chatbot />
    </main>
  );
};

export default Index;
