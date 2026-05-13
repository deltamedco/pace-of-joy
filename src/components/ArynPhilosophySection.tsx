const philosophy = [
  {
    letter: "A",
    title: "Aspire",
    lines: [
      "Aspire to achieve never achieved",
      "Aspire to inspire",
      "Aspire to cross the finish line",
    ],
  },
  {
    letter: "R",
    title: "Run",
    lines: ["Run with intent", "And run more"],
  },
  {
    letter: "Y",
    title: "Yield",
    lines: [
      "Yield to life",
      "Yield to family",
      "Yield to injury",
      "And yield to the plan",
    ],
  },
  {
    letter: "N",
    title: "Never",
    lines: ["Never give up"],
  },
];

const ArynPhilosophySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary font-heading text-sm font-semibold uppercase tracking-[0.3em] mb-3">
            Our Foundation
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            The ARYN Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophy.map((item) => (
            <div
              key={item.letter}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-heading text-3xl font-bold text-primary">
                  {item.letter}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.lines.map((line, idx) => (
                  <li
                    key={idx}
                    className="text-muted-foreground leading-relaxed text-base"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArynPhilosophySection;
