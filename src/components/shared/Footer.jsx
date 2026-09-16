import { officePhone, officePhoneDisplay } from "@/assets/data/contact";
import { Link } from "react-router-dom";
import OfficeAddress from "@/components/shared/OfficeAddress";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact", to: "/contact" },
  { label: "Sitemap", to: "/sitemap" },
];

const serviceLinks = [
  { label: "Residential Solar", to: "/services/residential-solar" },
  { label: "C&I Solar", to: "/services/commercial-industrial-solar" },
  { label: "Solar EPC", to: "/services/solar-epc-services" },
  { label: "O&M", to: "/services/operation-maintenance" },
  { label: "AMC", to: "/services/solar-amc-services" },
  { label: "Solar Audit", to: "/services/solar-energy-audit" },
];

const certifications = ["MNRE Approved", "GeM Registered", "ISO Certified"];

const socialLinks = [
  { icon: "fa-facebook", label: "Facebook", href: "https://www.facebook.com/share/199QbUrGzJ/" },
  { icon: "fa-instagram", label: "Instagram", href: "https://www.instagram.com/themechtechsolution.408?igsh=aHpuOHNudXJmanpp" },
  { icon: "fa-linkedin-in", label: "LinkedIn", href: "#" },
];

const Footer = () => {
  return (
    <footer className="srex-footer-one">
      <div className="container">
        <div className="row justify-content-between align-items-center srex-footer-one__top">
          <div className="col-12 col-lg-7 col-md-7">
            <div className="srex-footer-one__brand">
              <Link to="/">
                <img src="/images/mechtech.svg" alt="The Mechtech Solutions" />
              </Link>
              <p>
                Full-service solar EPC for homes, businesses, industries, and government projects across India.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-md-5">
            <ul className="srex-footer__social_links">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} aria-label={item.label} target="_blank" rel="noopener noreferrer">
                    <i className={`fa-brands ${item.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr />

        <div className="srex-footer__links">
          <div className="row g-4">
            <div className="col-12 col-lg-4 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>Contact Us</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__contact">
                    <li>
                      <div className="srex-footer__contact__icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div className="srex-footer__contact__text">
                        <span className="srex-footer__contact__label">Call Us</span>
                        <p>
                          <a href={`tel:${officePhone}`}>{officePhoneDisplay}</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="srex-footer__contact__icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="srex-footer__contact__text">
                        <span className="srex-footer__contact__label">Location</span>
                        <OfficeAddress />
                      </div>
                    </li>
                    <li>
                      <div className="srex-footer__contact__icon">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <div className="srex-footer__contact__text">
                        <span className="srex-footer__contact__label">Email</span>
                        <p>
                          <a className="contact-email" href="mailto:project@themechtechsolutions.in">
                            project@themechtechsolutions.in
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-2 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>Quick Links</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__links__list">
                    {quickLinks.map((item) => (
                      <li key={item.to}>
                        <Link to={item.to}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>Our Services</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__links__list">
                    {serviceLinks.map((item) => (
                      <li key={item.to}>
                        <Link to={item.to}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>Certifications</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__links__list srex-footer__certs">
                    {certifications.map((item) => (
                      <li key={item}>
                        <i className="fa-solid fa-check"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="srex-footer__certs-note">Empanelled with State Renewable Energy Agencies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="srex-footer__bottom">
          <div className="row">
            <div className="col-12 col-md-6">
              <p>&copy; {new Date().getFullYear()} The Mechtech Solutions | All Rights Reserved</p>
            </div>
            <div className="col-12 col-md-6 text-md-end">
              <p className="srex-footer__bottom__credit">Powered by VidhyaWorks</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
