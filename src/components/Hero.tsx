import { Button } from "@/components/ui/button";
import { Stars, Telescope, Calendar } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Night sky with stars and nebulae" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-aurora" />
        <div className="absolute inset-0 bg-gradient-cosmic opacity-60" />
      </div>
      
      {/* Animated Stars */}
      <div className="absolute inset-0 z-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Stars className="w-1 h-1 text-foreground opacity-50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-stellar bg-clip-text text-transparent">
            Astrodata Camp
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-foreground/90">
            Astronomy Summer Camp
          </p>
          <p className="text-lg md:text-xl mb-8 text-foreground/80 max-w-2xl mx-auto">
            A 3-week immersive journey into the cosmos for young explorers aged 16-24. 
            Discover, research, and observe the wonders of the universe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              variant="stellar"
              className="text-lg px-8 py-6"
              onClick={() => {
                const section = document.getElementById("waitlist-section");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Telescope className="mr-2" />
              Join the Waitlist
            </Button>
            <Button
              size="lg"
              variant="cosmic"
              className="text-lg px-8 py-6"
              onClick={() => {
                const section = document.getElementById("program-highlights");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Calendar className="mr-2" />
              Learn More
            </Button>
          </div>
          
          <p className="text-accent text-lg font-semibold animate-pulse">
            ✨ Applications open in November 2025
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float z-20">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}