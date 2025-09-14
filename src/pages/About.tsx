import { AboutHero } from "../components/AboutHero";
import { OurStory } from "../components/OurStory";
import { TeamSection } from "../components/TeamSection";
import { Footer } from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <AboutHero />
      <OurStory />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;