import { Activity, Brain, Utensils, Footprints } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Data-Driven",
    description: "VO2 max, heart rate zones, and pace analytics to optimize every training block.",
  },
  {
    icon: Brain,
    title: "Mental Fortitude",
    description: "Overcome 'The Wall' with proven mental strategies for race day resilience.",
  },
  {
    icon: Utensils,
    title: "Performance Fueling",
    description: "Personalized nutrition and hydration plans tailored to your body and goals.",
  },
  {
    icon: Footprints,
    title: "Gear Optimization",
    description: "Expert guidance on shoes, wearables, and equipment for peak performance.",
  },
];

const WhyTrainSection = () => {
  return (
    <section id="why-train" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Why Train With Coach Maulik?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-lg p-8 border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrainSection;
