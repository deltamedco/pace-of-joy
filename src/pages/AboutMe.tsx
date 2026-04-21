import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RaceHistorySection from "@/components/RaceHistorySection";

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
              Hi, I'm <span className="text-foreground font-semibold">Maulik Joshi</span> — an RRCA Certified Running Coach with over <span className="text-foreground font-semibold">5,000 miles</span>, <span className="text-foreground font-semibold">9+ years</span> of competitive experience, and <span className="text-foreground font-semibold">20+ half or full marathons</span> under my belt. I specialize in applying science-based periodization and disciplined pacing to guide athletes through the physical and mental demands of World Major Marathons and local race circuits.
            </p>

            <p>
              My own journey includes a personal <span className="text-foreground font-semibold">1-hour 39-minute reduction</span> in marathon time — proof that with the right plan, massive performance gains are possible. I know what it takes because I've lived it.
            </p>

            <p>
              Over the past <span className="text-foreground font-semibold">8 years</span>, I've had the privilege of helping <span className="text-foreground font-semibold">over a dozen runners</span> turn their marathon dreams into reality — whether through direct coaching, pacing support, or simply sharing hard-earned knowledge along the way. From first-time marathoners crossing the finish line to seasoned runners chasing new PRs, there's nothing more rewarding than watching someone accomplish a race they once thought was out of reach.
            </p>

            <p>
              I design high-impact Marathon and Half-Marathon plans that take runners from "finisher" to competitive PR chasers — guiding athletes from 5:00+ finishes to sub-3:30 performance levels. Most importantly, as an RRCA Certified Coach, I ensure safe, effective, and inclusive programming for diverse athlete populations.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground pt-4">
              Certifications & Education
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>RRCA Certified Running Coach — Road Runners Club of America</li>
              <li>Master of Business Administration, North Park University, Chicago</li>
              <li>Master of Science, New York Tech, NY</li>
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
      <RaceHistorySection />
      <Footer />
    </div>
  );
};

export default AboutMe;
