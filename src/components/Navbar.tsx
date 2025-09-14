import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="text-lg font-bold bg-gradient-stellar bg-clip-text text-transparent">
          Astrodata Camp
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-foreground/80 hover:text-foreground transition-colors">Home</a>
          <a href="/about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
        </nav>
        <Button
          variant="stellar"
          onClick={() => {
            const section = document.getElementById("waitlist-section");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Join the Waitlist
        </Button>
      </div>
    </header>
  );
}