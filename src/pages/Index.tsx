import { Hero } from "@/components/Hero";
import { ProgramHighlights } from "@/components/ProgramHighlights";
import { CampDetails } from "@/components/CampDetails";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";
import { ExperienceSection } from "@/components/ExperienceSection";
import { LearningSection } from "@/components/LearningSection";
import { PricingSection } from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProgramHighlights />
      <ExperienceSection />
      <LearningSection />
      <CampDetails />
      <PricingSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
