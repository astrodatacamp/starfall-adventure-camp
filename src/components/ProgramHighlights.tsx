import { Telescope, Users, Map, FlaskConical, Moon, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Telescope,
    title: "Nightly Observations",
    description: "Every night is observation night. Use professional telescopes to explore planets, galaxies, and nebulae.",
  },
  {
    icon: FlaskConical,
    title: "Research Projects",
    description: "Conduct real astronomical research alongside experienced astronomers and contribute to scientific discoveries.",
  },
  {
    icon: Users,
    title: "Meet Experts",
    description: "Connect with leading astronomers, astrophysicists, and space industry professionals.",
  },
  {
    icon: Map,
    title: "Field Excursions",
    description: "Visit observatories, planetariums, and dark sky locations for unforgettable stargazing experiences.",
  },
  {
    icon: Moon,
    title: "Astrophotography",
    description: "Learn to capture stunning images of celestial objects using specialized equipment and techniques.",
  },
  {
    icon: Sparkles,
    title: "Special Events",
    description: "Attend exclusive lectures, workshops, and special astronomical events throughout the program.",
  },
];

export function ProgramHighlights() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-stellar bg-clip-text text-transparent">
            Program Highlights
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Three weeks of intensive exploration, discovery, and hands-on experience in astronomy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-card/80 transition-all duration-300 hover:shadow-stellar hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="relative z-10">
                <highlight.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-foreground/70">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}