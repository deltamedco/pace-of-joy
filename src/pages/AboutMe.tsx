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
              Hi, I'm <span className="text-foreground font-semibold">Maulik Joshi</span> — an RRCA Certified Running Coach with over <span className="text-foreground font-semibold">5,000 miles</span>, <span className="text-foreground font-semibold">9+ years</span> of competitive experience, and <span className="text-foreground font-semibold">15 races</span> under my belt. I specialize in applying science-based periodization and disciplined pacing to guide athletes through the physical and mental demands of World Major Marathons and local race circuits.
            </p>

            <p>
              My own journey includes a personal <span className="text-foreground font-semibold">1-hour 39-minute reduction</span> in marathon time — proof that with the right plan, massive performance gains are possible. I know what it takes because I've lived it.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground pt-4">
              Key Coaching Expertise
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Marathon & Half-Marathon Specialization with 15 competitive races of personal experience</li>
              <li>Performance Progression — taking runners from "finisher" to competitive PR chasers</li>
              <li>Guiding athletes from 5:00+ finish times to ambitious sub-3:30 performance levels</li>
              <li>Data-Driven Training using VO2 max, heart rate zones, and split consistency</li>
              <li>Comprehensive Race Support — hydration planning, gear selection, and taper-phase management</li>
              <li>Mental Fortitude coaching to overcome "the Wall" and high-pressure race environments</li>
              <li>Race Strategy & Logistics for World Major Marathons (Chicago, NYC, Berlin)</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground pt-4">
              Certifications & Education
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>RRCA Certified Running Coach — Road Runners Club of America</li>
              <li>MBA, North Park University, Chicago</li>
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
      <Footer />
    </div>
  );
};

export default AboutMe;
