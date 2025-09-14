const organizers = [
  {
    name: "Dr. Evelyn Reed",
    role: "Lead Organizer & Astrophysicist",
    imageUrl: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=2523&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dr. Kenji Tanaka",
    role: "Co-organizer & Lead Educator",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const teamLeads = [
  {
    name: "Maria Garcia",
    role: "Head of Telescopes",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "David Chen",
    role: "Head of Astrophotography",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Aisha Bello",
    role: "Head of Research Projects",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Carlos Gomez",
    role: "Head of Community",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function TeamSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet the Team
        </h2>

        {/* Organizers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Main Organizers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {organizers.map((person) => (
              <div key={person.name} className="text-center">
                <img
                  src={person.imageUrl}
                  alt={person.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h4 className="text-xl font-bold">{person.name}</h4>
                <p className="text-muted-foreground">{person.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Leads */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Team Leaders</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamLeads.map((person) => (
              <div key={person.name} className="text-center">
                <img
                  src={person.imageUrl}
                  alt={person.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
                />
                <h4 className="text-lg font-bold">{person.name}</h4>
                <p className="text-muted-foreground">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}