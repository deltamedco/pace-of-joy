import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutMe = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            About Me
          </h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              Hi, I'm <span className="text-foreground font-semibold">Aryn</span> — a passionate running coach dedicated to helping runners of all levels reach their full potential. Whether you're training for your first 5K or chasing a marathon PR, I'm here to guide you every step of the way.
            </p>

            <p>
              With years of experience in distance running and coaching, I understand what it takes to build a training plan that works — one that balances performance, recovery, and the joy of running. My approach is rooted in science-backed methods, personalized attention, and a genuine love for the sport.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground pt-4">
              My Philosophy
            </h2>
            <p>
              I believe that every runner has untapped potential. My goal isn't just to make you faster — it's to make you a smarter, more resilient, and more confident athlete. Training should challenge you, but it should also be sustainable and enjoyable.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground pt-4">
              What I Offer
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Personalized training plans tailored to your goals and schedule</li>
              <li>Regular check-ins and plan adjustments based on your progress</li>
              <li>Guidance on nutrition, recovery, and race-day strategy</li>
              <li>A supportive coaching relationship built on trust and communication</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground pt-4">
              Let's Run Together
            </h2>
            <p>
              Ready to take your running to the next level? Head over to the{" "}
              <a href="/investment" className="text-primary font-semibold hover:underline">
                Investment
              </a>{" "}
              page to explore coaching packages, or reach out directly — I'd love to hear about your goals.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutMe;
