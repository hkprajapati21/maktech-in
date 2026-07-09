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
    <section className="srex-section-bottom srex-section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-12">
            <div className="srex-section-bottom__left ">
              <img src="/images/about-us/Shape.png" alt="Shape" />
              <img className="srex-section-bottom__left__img" src="/images/about-us/about-us-bottom.png" alt="about-us-bottom-img" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="srex-section-bottom__right">
              <div className="mb-5">
                <h3 data-aos="fade-up" className="srex-section-bottom__right__title ">
                  Going Solar in 5 Simple Steps
                </h3>
                <p data-aos="fade-up" data-aos-delay="200" className="srex-section-bottom__right__desc ">
                  From your first free site survey to ongoing performance monitoring — we make switching to solar simple, transparent, and stress-free.
                </p>
              </div>
              <div className="srex-icon-list srex-icon-list--multi-text">
                <ul>
                  {steps.map(({ title, desc }, index) => (
                    <li key={title} data-aos="fade-up" data-aos-delay={`${350 + index * 150}ms`} className="">
                      <i className="fa-solid fa-chevron-right"></i>
                      <div>
                        <h3>
                          Step {index + 1} — {title}
                        </h3>
                        <p>{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTwo;
