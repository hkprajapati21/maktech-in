import { Link } from "react-router-dom";

const services = [
  { number: "01", title: "Residential Solar", desc: "Cut your electricity bill by up to 90%. We install rooftop solar systems for homes and apartments with zero hassle.", icon: "/images/home-one/service/service-1.svg" },
  { number: "02", title: "Commercial & Industrial Solar", desc: "Large-scale solar plants for factories, warehouses, malls, and offices. Lower your operational costs starting Day 1.", icon: "/images/home-one/service/service-2.svg" },
  { number: "03", title: "Solar Financing", desc: "Go solar today with zero upfront cost. We help you find the right loan or financing scheme from leading banks.", icon: "/images/home-one/service/service-3.svg" },
  { number: "04", title: "Operation & Maintenance", desc: "Our AMC team keeps your plant running at peak efficiency — regular checkups, cleaning, and instant support.", icon: "/images/home-one/service/service-4.svg" },
  { number: "05", title: "Solar Design Solutions", desc: "Custom-engineered solar designs using the latest simulation tools for maximum generation and ROI.", icon: "/images/home-one/service/service-5.svg" },
  { number: "06", title: "Solar EPC Services", desc: "Engineering, Procurement & Construction — we manage your solar project from start to finish.", icon: "/images/home-one/service/service-6.svg" },
];

const Service = () => {
  return (
    <section className="srex-service srex-section">
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
          <div className="row">
            {services.map(({ number, title, desc, icon }, index) => (
              <div key={title} data-aos="fade-up" data-aos-delay={index * 200} className="col-md-6 col-lg-4 col-12">
                <div className="srex-info-box__item ">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="srex-info-box__item__img">
                      <img src={icon} className="srex-info-box__item__logo" alt={title} />
                    </div>
                    <h2 className="srex-info-box__item__number">{number}</h2>
                  </div>
                  <h3 className="srex-info-box__item__text">{title}</h3>
                  <p className="srex-service-text">{desc}</p>
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
    </section>
  );
};

export default Service;
