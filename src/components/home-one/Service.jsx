import { homeServices } from "@/assets/data/services";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <section className="srex-service srex-service--home srex-section">
      <div className="container">
        <div className="srex-section__head text-center">
          <h5 data-aos="fade-up" className="srex-section__head__badge ">
            <img src="/images/badge-icon.svg" alt="Badge Icon" />
            What We Do
          </h5>
          <h2 data-aos="fade-up" data-aos-delay="300" className="srex-section__head__title ">
            End-to-End Solar Services, One Reliable Partner
          </h2>
        </div>
        <div className="srex-info-box">
          <div className="row g-4">
            {homeServices.map(({ slug, title, shortDesc, icon }, index) => (
              <div key={slug} data-aos="fade-up" data-aos-delay={index * 80} className="col-md-6 col-lg-4 col-12 d-flex">
                <div className="srex-info-box__item srex-service-card">
                  <div className="srex-service-card__top">
                    <div className="srex-info-box__item__img">
                      <img src={icon} className="srex-info-box__item__logo" alt={title} />
                    </div>
                    <h2 className="srex-info-box__item__number">{String(index + 1).padStart(2, "0")}</h2>
                  </div>
                  <h3 className="srex-info-box__item__text">{title}</h3>
                  <p className="srex-service-text">{shortDesc}</p>
                  <div className="srex-info-box__more">
                    <Link to={`/services/${slug}`}>
                      Read More
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center srex-service--home__cta" data-aos="fade-up">
          <Link to="/services" className="srex-btn srex-btn--primary">
            View All Services <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Service;
