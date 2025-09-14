import { Users, Mountain, Sparkles } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "International Atmosphere",
    description: "Join a diverse group of young and enthusiastic students from all corners of the world, creating a unique and multicultural environment.",
  },
  {
    icon: Sparkles,
    title: "Lifelong Friendships",
    description: "The camp is a place for unforgettable memories and building lifelong friendships with like-minded peers who share your passion for astronomy.",
  },
  {
    icon: Mountain,
    title: "Spectacular Skies",
    description: "Located in a remote area with access to some of the most spectacular, dark skies you may have ever seen, perfect for stargazing.",
  },
];

export function ExperienceSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            An Unforgettable Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Astrodata Camp is more than just a learning program; it's a three-week adventure that creates lasting memories and connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border hover:bg-card/50 transition-all duration-300"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}