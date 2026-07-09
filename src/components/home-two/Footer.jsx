import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="srex-footer-two">
      <div className="container">
        <div className="srex-footer-two__top__content">
          <ul className="srex-footer-two__top__content__contact d-flex justify-content-between">
            <li>
              <div className="srex-footer-two__top__content__contact __icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="srex-footer-two__top__content__contact __text">
                <p>Requesting A Call:</p>
                <p>
                  <a href="tel:+10987654321">+(1) 098 765 4321</a>
                </p>
              </div>
            </li>
            <li>
              <div className="srex-footer-two__top__content__contact __icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="srex-footer-two__top__content__contact __text">
                <p>Sunday - Friday:</p>
                <h3>9 am - 8 pm</h3>
              </div>
            </li>
            <li>
              <div className="srex-footer-two__top__content__contact __icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="srex-footer-two__top__content__contact __text">
                <p>Location:</p>
                <h3>6391 Elgin St. Celina, Delaware</h3>
              </div>
            </li>
          </ul>
        </div>
        <div className="srex-footer-two__links footer-two">
          <div className="row">
            <div className="col-12 col-lg-5 col-md-6">
              <div className="srex-footer-two__links__logo">
                <img src="/images/mechtech.svg" alt="Mechtech Solutions" />
                <p className="srex-footer-two__links__logo__text">Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lore m ipsum dolor sit amet, risus</p>
                <ul className="srex-footer-two__links__social_links">
                  <li>
                    <i className="fa-brands fa-facebook"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-x-twitter"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-pinterest"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-2 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>Useful Links</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__links__list">
                    <li>
                      <Link to="/about">About US</Link>
                    </li>
                    <li>
                      <Link to="/services">Our Service</Link>
                    </li>
                    <li>
                      <Link to="/services">What We Do</Link>
                    </li>
                    <li>
                      <a href="#">Out Team</a>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-2 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>More Service</h4>
                <div className="srex-footer__links__content">
                  <ul className="srex-footer__links__list">
                    <li>
                      <a href="#">Accounting</a>
                    </li>
                    <li>
                      <a href="#">Risk Management</a>
                    </li>
                    <li>
                      <a href="#">Accounting</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                    <li>
                      <a href="#">Financial</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6">
              <div className="srex-footer__links__wrapper">
                <h4>Newsletter</h4>
                <div className="srex-footer__links__content">
                  <div className="srex-footer__newsletter">
                    <p>It is a long established fact that a reader will be distracted</p>
                    <div className="srex-footer__form">
                      <form className="text-center">
                        <input placeholder="Enter your email" type="text" />
                        <button type="button">
                          <i className="fa-solid fa-paper-plane"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-line"></div>

        <div className="srex-footer__bottom">
          <div className="row">
            <div className="col-12 col-md-6">
              <p>&copy; {new Date().getFullYear()} Mektech.in | All Rights Reserved</p>
            </div>
            <div className="col-12 col-md-6">
              <ul className="srex-footer__bottom__links">
                <li>
                  <a href="#">Trams & Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
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
