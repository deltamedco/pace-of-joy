import { Quote } from "lucide-react";

const reflections = [
  {
    name: "Yesha Patel",
    result: "−40 min Half Marathon PR",
    text: "I can't recommend Coach Maulik enough! When I started working with him, I never imagined I'd eventually become a marathoner. He provides amazing guidance and knows exactly how to push you to the next level. I was able to cut 40 minutes off my half-marathon PR, and I couldn't have done it without his expertise. Amazing coach and an even better motivator!",
  },
  {
    name: "Hiran Shah",
    result: "First-Time Marathoner",
    text: "His constant encouragement and quiet way to push you for one more make him special. His biggest strength is well before the race starts — during training he provides all the ingredients you need to succeed. He's like a master chef and gives you all the tools to succeed. You will not be disappointed if you give him a chance. He'll be there at every step of your journey and make it a fun run for you.",
  },
  {
    name: "Himil Shah",
    result: "Couch to Marathon",
    text: "You're the reason I got into running in the first place. I went from barely getting off the couch to finishing a marathon, and now I'm the kind of person who looks for runs wherever I travel. I've learned so much — how the right shoes can change everything, how different types of runs actually serve a purpose, and how following a structured plan makes big goals feel achievable. Really grateful for the push, the guidance, and all the miles.",
  },
];

const RunnerReflectionsSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-primary font-heading text-sm font-semibold uppercase tracking-[0.3em] mb-3">
            In Their Words
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Runner Reflections
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed text-lg">
            Notes from fellow runners I've had the privilege of training and racing with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reflections.map((r) => (
            <div
              key={r.name}
              className="bg-card border border-border rounded-lg p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-1">
                "{r.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold text-foreground">{r.name}</p>
                <p className="text-primary text-xs font-semibold uppercase tracking-wider">
                  {r.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RunnerReflectionsSection;
