const Contact = () => {
  return (
    <section className="srex-contact srex-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="srex-contact__left ">
              <form action="#">
                <div className="row justify-content-center">
                  <div className="col-md-6 col-12">
                    <input name="full-name" placeholder="Your Name" type="text" required />
                  </div>
                  <div className="col-md-6 col-12">
                    <input name="email" placeholder="Email Address" type="text" required />
                  </div>
                </div>
                <div>
                  <input placeholder="Your Phone" type="text" name="phone" required />
                </div>
                <div>
                  <textarea placeholder="Your Message" id="message" rows="5" name="message" required></textarea>
                </div>
                <div>
                  <button type="button" className="srex-btn srex-btn--secondary">
                    Submit Now
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="srex-contact__right mt-5">
              <div className="srex-section__head">
                <h5 data-aos="fade-up" className="srex-section__head__badge ">
                  <img src="/images/badge-icon.svg" alt="Badge Icon" />
                  Contact US
                </h5>
                <h2 data-aos="fade-up" data-aos-delay="300" className="srex-section__head__title ">
                  Empowering Communities with Solar Energy
                </h2>
                <p data-aos="fade-up" data-aos-delay="400" className="mt-2 mb-4 ">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a
                </p>

                <div data-aos="fade-up" data-aos-delay="500" className="srex-icon-list">
                  <ul>
                    <li className="">
                      <i className="fa-solid fa-phone"></i>
                      <h4>
                        <a href="tel:+6295550129">(629) 555-0129</a>
                      </h4>
                    </li>
                    <li className="">
                      <i className="fa-solid fa-envelope"></i>
                      <h4>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </h4>
                    </li>
                    <li className="">
                      <i className="fa-solid fa-location-dot"></i>
                      <h4>6391 Elgin St. Celina, 10299</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
