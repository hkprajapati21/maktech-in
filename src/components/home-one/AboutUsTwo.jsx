const steps = [
  {
    title: "Free Site Survey",
    desc: "Our expert visits your location, analyzes your roof, sunlight hours, and electricity bill.",
  },
  {
    title: "Custom Design",
    desc: "We design a solar system tailored exactly to your energy needs.",
  },
  {
    title: "Documentation & Approvals",
    desc: "We handle all permits, net metering applications, and subsidy paperwork for you.",
  },
  {
    title: "Installation",
    desc: "Our certified team installs your system quickly, neatly, and safely.",
  },
  {
    title: "Monitoring & Support",
    desc: "Your plant goes live. We track its performance and are available whenever you need us.",
  },
];

const AboutUsTwo = () => {
  return (
    <section className="srex-section-bottom srex-section-bottom--steps-only srex-section">
      <div className="container">
        <div className="srex-section-bottom__head text-center">
          <h5 data-aos="fade-up" className="srex-section__head__badge">
            <img src="/images/badge-icon.svg" alt="Badge Icon" />
            How It Works
          </h5>
          <h3 data-aos="fade-up" data-aos-delay="150" className="srex-section-bottom__right__title">
            Going Solar in 5 Simple Steps
          </h3>
          <p data-aos="fade-up" data-aos-delay="250" className="srex-section-bottom__right__desc">
            From your first free site survey to ongoing performance monitoring - we make switching to solar simple,
            transparent, and stress-free.
          </p>
        </div>

        <div className="srex-section-bottom__steps">
          <div className="srex-icon-list srex-icon-list--multi-text">
            <ul>
              {steps.map(({ title, desc }, index) => (
                <li key={title} data-aos="fade-up" data-aos-delay={350 + index * 100}>
                  <i className="fa-solid fa-chevron-right"></i>
                  <div>
                    <h3>
                      Step {index + 1} - {title}
                    </h3>
                    <p>{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTwo;
