import { Calendar, TrendingUp, Zap, Timer } from "lucide-react";

const training = [
  {
    icon: Calendar,
    title: "Customized Training Calendar",
    description:
      "A dynamic, week-by-week schedule crafted for your fitness level, target race time, and personal commitments.",
  },
  {
    icon: TrendingUp,
    title: "Periodization Strategy",
    description:
      "Strategic 'build' phases followed by planned cut-back weeks, allowing your body to adapt and grow stronger.",
  },
  {
    icon: Zap,
    title: "Performance Workouts",
    description:
      "Intervals, tempo runs, and hill repeats to boost cardiovascular efficiency and increase your VO2 max.",
  },
  {
    icon: Timer,
    title: "The Taper Phase",
    description:
      "A critical 2–3 week reduction in mileage before race day, ensuring you arrive with completely fresh legs.",
  },
];

const nutrition = [
  "In-run fuel testing with gels, chews, and liquids to find what your body thrives on.",
  "Daily macronutrient balance for optimal energy and recovery.",
  "Race-week carb-loading protocol covering the 48–72 hours before the event.",
];

const mental = [
  "Pacing strategy development — negative split or even split based on heart rate zones.",
  "Mental reframing techniques to push through 'The Wall' (miles 18–22).",
  "Race-day logistics: gear selection, travel tips, and managing starting-village anxiety.",
];

const TrainingOverviewSection = () => {
  return (
    <section id="training" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-heading text-sm font-semibold uppercase tracking-[0.3em] mb-3">
            What to Expect
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Training Overview
          </h2>
        </div>

        {/* All three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="text-lg">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                🏃
              </span>
              Training Plan
            </h3>
            <ul className="space-y-3">
              {training.map((item) => (
                <li key={item.title} className="text-muted-foreground text-lg leading-relaxed flex gap-3">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <span className="text-lg"><span className="font-medium text-muted-foreground">{item.title}:</span> {item.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-lg">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                🍎
              </span>
              Nutrition & Fueling
            </h3>
            <ul className="space-y-3">
              {nutrition.map((item, i) => (
                <li key={i} className="text-muted-foreground text-lg leading-relaxed flex gap-3">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-lg">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                🏁
              </span>
              Race Execution
            </h3>
            <ul className="space-y-3">
              {mental.map((item, i) => (
                <li key={i} className="text-muted-foreground text-lg leading-relaxed flex gap-3">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingOverviewSection;
