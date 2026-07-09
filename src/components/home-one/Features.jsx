import { Link } from "react-router-dom";

const benefits = [
  { title: "MNRE Approved & GeM Registered", desc: "Fully certified vendor for residential, commercial, and government solar projects.", icon: "/images/home-one/features/features-1.svg" },
  { title: "Transparent Pricing", desc: "No hidden costs, ever. Honest site surveys and accurate system designs.", icon: "/images/home-one/features/features-2.svg" },
  { title: "Experienced Engineers", desc: "Qualified solar engineers with proven site execution across India.", icon: "/images/home-one/features/features-3.svg" },
  { title: "25-Year Panel Warranty", desc: "Timely installation with dedicated post-installation AMC support.", icon: "/images/home-one/features/features-4.svg" },
];

const Features = () => {
  return (
    <section className="srex-features srex-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6 col-12">
            <div className="srex-features__left text-left">
              <div className="srex-section__head">
                <h5 data-aos="fade-up" className="srex-section__head__badge ">
                  <img src="/images/badge-icon.svg" alt="Badge Icon" />
                  Why Choose Us
                </h5>
                <h2 data-aos="fade-up" data-aos-delay="300" className="srex-section__head__title ">
                  Why Hundreds of Clients Trust Us
                </h2>
                <p data-aos="fade-up" data-aos-delay="400" className="mb-5  ">
                  We deliver end-to-end turnkey solar solutions under one roof — from free site surveys and custom designs to installation, net metering, and long-term AMC support.
                </p>
                <Link data-aos="fade-up" data-aos-delay="500" to="/about-us" className="srex-btn srex-btn--outline ">
                  Know More About Us <i className="fa-solid fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="srex-info-box srex-info-box--feature-box">
              <div className="row">
                {benefits.map(({ title, desc, icon }, index) => (
                  <div key={title} data-aos="fade-up" data-aos-delay={600 + index * 100} className="col-md-6 col-12">
                    <div className="srex-info-box__item ">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="srex-info-box__item__img">
                          <img src={icon} className="srex-info-box__item__logo" alt={title} />
                        </div>
                      </div>
                      <h3 className="srex-info-box__item__text">{title}</h3>
                      <p className="mb-3">{desc}</p>
                      <div className="srex-info-box__more">
                        <Link to="/services">
                          Read More
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
