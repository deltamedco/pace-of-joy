import heroImage from "@/assets/hero-runner.jpg";
import { Mail, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Runner on track at golden hour" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          {/* Brand */}
          <div className="mb-6">
            <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-wider text-primary">
              ARYN.
            </h2>
            <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mt-1">
              Aspire · Run · Yield · Never Give Up
            </p>
          </div>

          {/* Tagline */}
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            From Finisher to{" "}
            <span className="text-gradient-gold">Competitor.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-lg">
            Make your marathon journey extraordinary with personalized, data-driven coaching.
          </p>

          {/* Coach info */}
          <div className="gold-border-accent pl-4 mb-8">
            <p className="font-heading text-2xl font-semibold text-primary">Maulik Joshi</p>
            <p className="text-muted-foreground text-sm">RRCA Certified Running Coach</p>
          </div>

          {/* Proven result badge */}
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

          {/* CTA */}
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
      </div>
    </section>
  );
};

export default HeroSection;
