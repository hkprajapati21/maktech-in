import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="srex-footer-one">
      <div className="container">
        <div className="row justify-content-between align-items-center srex-footer-one__top">
          <div className="col-6 col-lg-6 col-md-6">
            <img src="/images/mechtech.svg" alt="Mechtech Solutions" />
          </div>
          <div className="col-lg-6 col-6 col-md-6">
            <ul className="srex-footer__social_links">
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="srex-footer__links">
          <div className="row">
            <div data-aos="fade" className="col-12 col-lg-3 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>Contact Us</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__contact">
                    <li>
                      <div className="srex-footer__contact__icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div className="srex-footer__contact__text">
                        <p>
                          <a href="tel:+919876543210">+91 98765 43210</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="srex-footer__contact__icon">
                        <i className="fa-solid fa-paper-plane"></i>
                      </div>
                      <div className="srex-footer__contact__text">
                        <p>India — Pan-India Solar Solutions</p>
                      </div>
                    </li>
                    <li>
                      <div className="srex-footer__contact__icon">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <div className="srex-footer__contact__text">
                        <p>
                          <a href="mailto:info@mektech.in">info@mektech.in</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div data-aos="fade" data-aos-delay="200" className="col-6 col-lg-3 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>Quick Links</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__links__list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div data-aos="fade" data-aos-delay="400" className="col-6 col-lg-3 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>Our Services</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__links__list">
                    <li>
                      <Link to="/services">Residential Solar</Link>
                    </li>
                    <li>
                      <Link to="/services">C&amp;I Solar</Link>
                    </li>
                    <li>
                      <Link to="/services">Solar EPC</Link>
                    </li>
                    <li>
                      <Link to="/services">O&amp;M</Link>
                    </li>
                    <li>
                      <Link to="/services">AMC</Link>
                    </li>
                    <li>
                      <Link to="/services">Solar Audit</Link>
                    </li>
                    <li>
                      <Link to="/services">GeM Supplier</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div data-aos="fade" data-aos-delay="600" className="col-12 col-lg-3 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>Certifications</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__links__list">
                    <li>MNRE Approved</li>
                    <li>GeM Registered</li>
                    <li>ISO Certified</li>
                  </ul>
                  <p className="mt-3">Empanelled with State Renewable Energy Agencies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="srex-footer__bottom">
          <div className="row">
            <div className="col-12 col-md-6">
              <p>&copy; {new Date().getFullYear()} Mektech.in | All Rights Reserved</p>
            </div>
            <div className="col-12 col-md-6">
              <ul className="srex-footer__bottom__links">
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/about-us">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
