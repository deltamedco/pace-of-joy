import heroImage from "@/assets/hero-coach.jpg";
import marathonImage from "@/assets/hero-marathon.jpg";
import { Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="flex-1 max-w-xl">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              From Finisher to{" "}
              <span className="text-gradient-gold">Competitor.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-4 max-w-lg">
              Make your marathon journey extraordinary with personalized, data-driven coaching.
            </p>

            <div className="gold-border-accent pl-4 mb-8">
              <p className="font-heading text-2xl font-semibold text-primary">Maulik Joshi</p>
              <p className="text-foreground/70 text-sm">RRCA Certified Running Coach</p>
            </div>

            <div className="inline-block bg-gradient-gold rounded-lg px-6 py-4 mb-8">
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground">
                Proven Results
              </p>
              <p className="font-heading text-2xl font-bold text-primary-foreground">
                1 Hr 39 Min
              </p>
              <p className="text-xs text-primary-foreground/80">
                Personal Marathon Time Reduction
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-gradient-gold font-heading text-sm font-semibold uppercase tracking-wider px-8 py-3 rounded text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Start Training
              </a>
              <a
                href="mailto:aryn.coachmj@gmail.com"
                className="border border-primary/40 font-heading text-sm font-semibold uppercase tracking-wider px-8 py-3 rounded text-primary hover:bg-primary/10 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Contact Me
              </a>
            </div>
          </div>

          {/* Two photos side by side */}
          <div className="flex-1 flex gap-4 max-w-2xl">
            <div className="flex-1 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Coach Maulik Joshi running on track"
                className="w-full h-[500px] lg:h-[600px] object-cover object-top"
              />
            </div>
            <div className="flex-1 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={marathonImage}
                alt="Coach Maulik Joshi at Chicago Marathon with PR"
                className="w-full h-[500px] lg:h-[600px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
