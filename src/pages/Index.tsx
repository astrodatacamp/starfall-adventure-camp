import { Hero } from "@/components/Hero";
import { ProgramHighlights } from "@/components/ProgramHighlights";
import { CampDetails } from "@/components/CampDetails";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProgramHighlights />
      <CampDetails />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
