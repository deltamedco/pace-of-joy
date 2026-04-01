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
            <p>
              With a portfolio of <span className="text-foreground font-semibold">15 competitive races</span>, I specialize in Marathon and Half-Marathon training — designing relatable, high-impact plans that take runners from novice "finisher" status to achieving competitive Personal Records. I expertly guide athletes through "The Marathon Journey," helping them make the significant leap from 5:00+ finish times to ambitious sub-3:30 performance levels. My approach is deeply data-driven, utilizing advanced analysis including VO2 max, heart rate zone monitoring, and split consistency to optimize every training block. On race day, I provide comprehensive support covering hydration planning, gear selection, and effective taper-phase management. Beyond the physical, I coach specific mental fortitude techniques to overcome challenges like "hitting the Wall" and thriving in high-pressure race environments. As an RRCA Certified Coach, I ensure all programming is safe, effective, and inclusive for diverse athlete populations.
            </p>

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
