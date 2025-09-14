import { CheckCircle } from "lucide-react";

const includedFeatures = [
  "Full accommodation for 3 weeks",
  "All meals and snacks included",
  "Hands-on workshops and trainings",
  "Personalized research project guidance",
  "Access to telescopes and equipment",
  "All community activities and excursions",
  "Certificate of completion",
];

export function PricingSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Camp Fee
          </h2>
          <p className="text-lg text-muted-foreground">
            One all-inclusive price for an unforgettable cosmic journey.
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-foreground">All-Inclusive Package</h3>
              <p className="text-5xl font-bold bg-gradient-stellar bg-clip-text text-transparent mt-2">
                $1400 USD
              </p>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-semibold text-foreground mb-4">What's Included:</h4>
              <ul className="space-y-2">
                {includedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}