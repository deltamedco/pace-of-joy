import { Stethoscope, Apple, Dumbbell, Heart } from "lucide-react";

const scopeItems = [
  {
    icon: Stethoscope,
    title: "Medical Diagnosis or Physical Therapy",
    coachRole:
      "Can recommend preventative strengthening ('pre-hab') but cannot diagnose injuries.",
    athleteAction:
      "If you experience sharp or persistent pain, I will refer you to a Doctor or Sports Physical Therapist.",
  },
  {
    icon: Apple,
    title: "Clinical Nutrition or Meal Planning",
    coachRole:
      "Advises on performance fueling but is not a Registered Dietitian. Offers general macronutrient guidance.",
    athleteAction:
      "Cannot prescribe meal plans for medical conditions or provide clinical weight-loss prescriptions.",
  },
  {
    icon: Dumbbell,
    title: "Strength or Weightlifting",
    coachRole:
      "Provides bodyweight or light resistance routines specific to running stability.",
    athleteAction:
      "For heavy lifting or specialized gym form, consult a dedicated Strength Coach.",
  },
  {
    icon: Heart,
    title: "Mental Health Therapy",
    coachRole:
      "Acts as a motivator and strategist — can assist with performance-related 'race anxiety.'",
    athleteAction:
      "Not equipped to treat clinical conditions. For those, please consult a licensed Mental Health Counselor.",
  },
];

const ScopeSection = () => {
  return (
    <section id="scope" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-heading text-sm font-semibold uppercase tracking-[0.3em] mb-3">
            Transparency
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What Not to Expect
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed text-lg">
            To maintain your safety and ensure the highest quality of specialized care, the following
            areas are outside the standard scope of a running coach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {scopeItems.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <div className="space-y-2">
                <p className="leading-relaxed text-lg">
                  <span className="text-primary font-semibold">Coach's Role: </span>
                  <span className="text-muted-foreground">{item.coachRole}</span>
                </p>
                <p className="leading-relaxed text-lg">
                  <span className="text-primary font-semibold">Your Action: </span>
                  <span className="text-muted-foreground">{item.athleteAction}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScopeSection;
