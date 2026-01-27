import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AudienceSection from "@/components/AudienceSection";
import SeniorSection from "@/components/SeniorSection";
import PlansSection from "@/components/PlansSection";
import ProvidersSection from "@/components/ProvidersSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AudienceSection />
        <SeniorSection />
        <PlansSection />
        <ProvidersSection />
        <BenefitsSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
