import { Star } from "lucide-react";

const reviews = [
  {
    name: "Hery Shah",
    text: "Coach Maulik helped me shave 45 minutes off my marathon time. His data-driven approach and constant motivation made all the difference.",
    stars: 5,
    result: "3:45 → 3:00 Marathon",
  },
  {
    name: "Keyuri Shah",
    text: "I went from barely finishing a half marathon to confidently racing a full. The nutrition and mental coaching were game-changers.",
    stars: 5,
    result: "First Marathon Finisher",
  },
  {
    name: "Emily K.",
    text: "The personalized training plans are incredible. Every workout has a purpose, and I've never felt more prepared on race day.",
    stars: 5,
    result: "BQ Qualifier",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-heading text-sm font-semibold uppercase tracking-[0.3em] mb-3">
            Athlete Stories
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What Runners Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-card border border-border rounded-lg p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold text-foreground">{review.name}</p>
                <p className="text-primary text-xs font-semibold uppercase tracking-wider">
                  {review.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
