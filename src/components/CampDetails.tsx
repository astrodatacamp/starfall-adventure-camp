import { Calendar, Users, MapPin, Clock } from "lucide-react";

const details = [
  {
    icon: Calendar,
    label: "Duration",
    value: "3 Weeks",
    description: "Intensive summer program",
  },
  {
    icon: Users,
    label: "Age Range",
    value: "16-24 Years",
    description: "Young astronomy enthusiasts",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dark Sky Reserve",
    description: "Pristine observation conditions",
  },
  {
    icon: Clock,
    label: "Daily Schedule",
    value: "Full Days + Nights",
    description: "Lectures, labs & observations",
  },
];

export function CampDetails() {
  return (
    <section className="py-20 px-6 bg-gradient-cosmic">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Camp Details
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border hover:bg-card/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <detail.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
              <p className="text-2xl font-bold text-foreground mb-2">{detail.value}</p>
              <p className="text-sm text-foreground/70">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}