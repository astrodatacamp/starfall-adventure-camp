import { Telescope } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Telescope className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold bg-gradient-stellar bg-clip-text text-transparent">
              Stellar Horizons
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Stellar Horizons Astronomy Camp. Reach for the stars.
          </p>
        </div>
      </div>
    </footer>
  );
}