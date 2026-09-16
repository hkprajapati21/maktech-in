import { companyStats } from "@/assets/data/companyStats";

const benefits = [
  { title: "MNRE Approved & GeM Registered", desc: "Fully certified vendor for residential, commercial, and government solar projects.", icon: "/images/home-one/features/features-1.svg" },
  { title: "Transparent Pricing", desc: "No hidden costs, ever. Honest site surveys and accurate system designs.", icon: "/images/home-one/features/features-2.svg" },
  { title: "Experienced Engineers", desc: "Qualified solar engineers with proven site execution across India.", icon: "/images/home-one/features/features-3.svg" },
  { title: "25-Year Panel Warranty", desc: "Timely installation with dedicated post-installation AMC support.", icon: "/images/home-one/features/features-4.svg" },
];

const Features = () => {
  return (
    <section className="srex-features srex-features--compact srex-section">
      <div className="container">
        <div className="srex-features__head text-center">
          <h5 data-aos="fade-up" className="srex-section__head__badge">
            <img src="/images/badge-icon.svg" alt="Badge Icon" />
            Why Choose Us
          </h5>
          <h2 data-aos="fade-up" data-aos-delay="200" className="srex-section__head__title">
            Why {companyStats.clients.value}{companyStats.clients.suffix} Clients Trust Us
          </h2>
          <p data-aos="fade-up" data-aos-delay="300" className="srex-features__desc">
            End-to-end turnkey solar solutions under one roof - from free site surveys and custom designs to installation, net metering, and long-term AMC support.
          </p>
        </div>

        <div className="srex-info-box srex-info-box--feature-box">
          <div className="row g-3">
            {benefits.map(({ title, desc, icon }, index) => (
              <div key={title} data-aos="fade-up" data-aos-delay={350 + index * 80} className="col-md-6 col-lg-3 col-12 d-flex">
                <div className="srex-info-box__item srex-features-card">
                  <div className="srex-info-box__item__img">
                    <img src={icon} className="srex-info-box__item__logo" alt={title} />
                  </div>
                  <h3 className="srex-info-box__item__text">{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
