import { Telescope, BookOpen, Camera } from "lucide-react";

const activities = [
  {
    icon: Telescope,
    title: "Hands-On Telescope Use",
    description: "Learn to operate modern telescopes for night observations, guided by experienced astronomers.",
  },
  {
    icon: BookOpen,
    title: "Personal Research Projects",
    description: "Work on a research project of your own, with guidance from a leader to help you make amazing discoveries.",
  },
  {
    icon: Camera,
    title: "Astrophotography",
    description: "Capture the beauty of the night sky by creating your own incredible astro-photographs.",
  },
];

export function LearningSection() {
  return (
    <section className="py-20 px-6 bg-gradient-cosmic">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Limitless Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            No previous astrophysical knowledge is required. All that is needed is a passion for astronomy and the night skies!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border hover:bg-card/50 transition-all duration-300"
            >
              <activity.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{activity.title}</h3>
              <p className="text-foreground/80">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}