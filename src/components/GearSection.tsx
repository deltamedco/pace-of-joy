import { Footprints, RotateCcw, Shirt, Watch, CheckCircle, Droplets } from "lucide-react";

const gearItems = [
  {
    icon: Footprints,
    title: "Footwear Biomechanics",
    description:
      "Assessment of your foot strike to recommend the optimal shoe — neutral, stability, or carbon-plated super shoes.",
  },
  {
    icon: RotateCcw,
    title: "Shoe Rotations",
    description:
      "Rotating daily trainers and dedicated speed/race shoes to prolong footwear life and provide varied stimuli.",
  },
  {
    icon: Shirt,
    title: "Running Apparel",
    description:
      "Moisture-wicking, non-cotton fabrics to prevent chafing, with seasonal gear planning for all conditions.",
  },
  {
    icon: Watch,
    title: "Wearable Tech Integration",
    description:
      "Setup and utilization of GPS watches (Garmin, Apple) to monitor heart rate zones, cadence, and pace.",
  },
  {
    icon: CheckCircle,
    title: "Race Day Kit Rehearsal",
    description:
      "Test all gear during long training runs. The golden rule: \"Nothing new on race day.\"",
  },
  {
    icon: Droplets,
    title: "Hydration Solutions",
    description:
      "Evaluation of handheld bottles, waist belts, and hydration vests for carrying fuel and fluids.",
  },
];

const GearSection = () => {
  return (
    <section id="gear" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-heading text-sm font-semibold uppercase tracking-[0.3em] mb-3">
            Optimize Your Setup
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Gear & Equipment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {gearItems.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors group text-lg"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GearSection;
