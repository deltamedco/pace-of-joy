import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "The Foundation",
    subtitle: "Base Preparation",
    price: "Free",
    priceNote: "Complimentary with any Race Training signup",
    duration: "4 to 8 Weeks (Pre-training)",
    focus:
      "Building the 'engine' and structural integrity before the high-intensity race block begins.",
    features: [
      "30-minute introductory call — running history, injury background, and goal setting",
      "4 to 8 week base mileage build to safely prepare tendons and ligaments",
      "Unlimited email/message support with 24–48 hour response time",
    ],
    highlight: false,
  },
  {
    name: "The 5K / 10K",
    subtitle: "Short-Distance Training",
    price: "$150",
    priceNote: "",
    duration: "4 to 6 Weeks",
    focus:
      "A focused plan for shorter race distances with personalized coaching to hit your target time.",
    features: [
      "Personalized running plan tailored to your fitness level and goal time",
      "Two 30-minute one-on-one coaching calls",
      "4 to 6 weeks of ongoing support and plan adjustments",
      "Unlimited email/message support with 24–48 hour response time",
    ],
    highlight: false,
  },
  {
    name: "The Half Marathon",
    subtitle: "13.1-Mile Training",
    price: "$300",
    priceNote: "",
    duration: "8 to 12 Weeks",
    focus:
      "Developing speed-endurance and a rock-solid pacing strategy for the 13.1-mile distance.",
    features: [
      "Customized training plan designed around your goal time (Finisher, Sub-2:00, etc.)",
      "Bi-weekly progress reviews via WhatsApp, FaceTime, or in person",
      "In-person running sessions (Chicagoland area)",
      "Up to 6 one-on-one consultations included",
      "Unlimited email/message support with 24–48 hour response time",
    ],
    highlight: false,
  },
  {
    name: "The Marathon",
    subtitle: "26.2-Mile Journey",
    price: "$500",
    priceNote: "",
    duration: "12 to 16 Weeks",
    focus:
      "A comprehensive, high-touch partnership for the full 26.2-mile journey.",
    features: [
      "Personalized training plan for your target time (Finisher, Sub-4:00, etc.)",
      "Bi-weekly progress reviews via WhatsApp, FaceTime, or in person",
      "Full race-day blueprint — pre-race carb-loading to the final mile",
      "In-person running sessions (Chicagoland area)",
      "Up to 10 one-on-one consultations included",
      "Unlimited email/message support with 24–48 hour response time",
    ],
    highlight: false,
  },
];

const Investment = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-[0.3em] mb-3">
              Training Packages
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Your Investment
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              Every package includes the complimentary Foundation phase to build your base before
              race-specific training begins.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-xl p-8 flex flex-col border ${
                  pkg.highlight
                    ? "border-primary bg-card shadow-lg shadow-primary/10 relative"
                    : "border-border bg-card"
                }`}
              >

                <div className="mb-6">
                  <h3 className="font-heading font-bold text-foreground text-3xl">
                    {pkg.name}
                  </h3>
                  <p className="text-primary text-sm font-semibold uppercase tracking-wider mt-1">
                    {pkg.subtitle}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="font-heading text-4xl font-bold text-foreground">
                    {pkg.price}
                  </span>
                  {pkg.priceNote && (
                    <p className="text-muted-foreground mt-1 text-xs">{pkg.priceNote}</p>
                  )}
                </div>

                <div className="gold-border-accent pl-4 mb-6">
                  <p className="text-muted-foreground uppercase tracking-wider font-semibold mb-1 text-sm">
                    Duration
                  </p>
                  <p className="text-foreground text-base">{pkg.duration}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {pkg.focus}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground leading-relaxed text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Investment;
