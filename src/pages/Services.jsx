import Contact from "@/components/home-three/Contact";
import SectionTop from "@/components/shared/SectionTop";
import { Link } from "react-router-dom";

const services = [
  { title: "Residential Solar", desc: "Cut your electricity bill by up to 90%. We install rooftop solar systems for homes and apartments with zero hassle.", icon: "/images/home-one/service/service-1.svg" },
  { title: "Commercial & Industrial Solar", desc: "Large-scale solar plants for factories, warehouses, malls, and offices. Lower your operational costs starting Day 1.", icon: "/images/home-one/service/service-2.svg" },
  { title: "Solar Financing", desc: "Go solar today with zero upfront cost. We help you find the right loan or financing scheme from leading banks.", icon: "/images/home-one/service/service-3.svg" },
  { title: "Operation & Maintenance", desc: "Our AMC team keeps your plant running at peak efficiency — regular checkups, cleaning, and instant support.", icon: "/images/home-one/service/service-4.svg" },
  { title: "Solar Design Solutions", desc: "Custom-engineered solar designs using the latest simulation tools for maximum generation and ROI.", icon: "/images/home-one/service/service-5.svg" },
  { title: "Solar EPC Services", desc: "Engineering, Procurement & Construction — we manage your solar project from start to finish.", icon: "/images/home-one/service/service-6.svg" },
  { title: "Site Survey & Consultation", desc: "Free site assessment by our technical experts. We give you honest numbers, not just a sales pitch.", icon: "/images/home-one/service/service-1.svg" },
  { title: "Energy Efficiency Solutions", desc: "We don't just add solar — we audit your energy consumption and help you save more.", icon: "/images/home-one/service/service-2.svg" },
  { title: "Solar Energy Audit", desc: "Wondering why your plant isn't generating enough? Our audit finds the gaps and fixes them.", icon: "/images/home-one/service/service-3.svg" },
  { title: "Government GeM Supplier", desc: "MNRE approved and GeM registered. We execute government solar projects with full compliance.", icon: "/images/home-one/service/service-4.svg" },
];

const Services = () => {
  return (
    <>
      <SectionTop title="Our Services" />

      <section className="srex-service srex-section">
        <div className="container">
          <div className="srex-section__head text-center mb-5">
            <h2 className="srex-section__head__title">End-to-End Solar Services, One Reliable Partner</h2>
            <p className="srex-section__head__desc">From rooftop installations to large-scale EPC projects — Mektech.in handles it all.</p>
          </div>
          <div className="srex-info-box">
            <div className="row">
              {services.map(({ title, desc, icon }) => (
                <div key={title} className="col-md-6 col-lg-3 col-12">
                  <div className="srex-info-box__item ">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="srex-info-box__item__img">
                        <img src={icon} className="srex-info-box__item__logo" alt={title} />
                      </div>
                    </div>
                    <h3 className="srex-info-box__item__text">{title}</h3>
                    <p className="srex-service-text">{desc}</p>
                    <div className="srex-info-box__more">
                      <Link to="/service-details">
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

      <Contact classes="pt-120 pb-120" />
    </>
  );
};

export default Services;
