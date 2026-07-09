import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="srex-about-us-one srex-section">
      <div className="srex-about-us-one__container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="srex-about-us-one__left text-left">
              <div className="srex-section__head">
                <h5 data-aos="fade-up" className="srex-section__head__badge ">
                  <img src="/images/badge-icon.svg" alt="Badge Icon" />
                  Who We Are
                </h5>
                <h2 data-aos="fade-up" data-aos-delay="200" className="srex-section__head__title ">
                  Solar Solutions Built Around You
                </h2>
                <p data-aos="fade-up" data-aos-delay="400" className="srex-section__head__desc ">
                  We are a full-service solar EPC company based in India, specializing in turnkey solar solutions for residential, commercial, industrial, and government clients. From the first site visit to final commissioning and ongoing AMC, we handle everything. No middlemen. No confusion. Just clean energy that works.
                </p>

                <div className="srex-icon-list ">
                  <ul data-aos="fade-up" data-aos-delay="600">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      <p>MNRE Approved &amp; GeM Registered Vendor</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      <p>End-to-end turnkey solar solutions under one roof</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      <p>Transparent pricing — no hidden costs, ever</p>
                    </li>
                  </ul>
                </div>

                <Link data-aos="fade-up" data-aos-delay="700" to="/about-us" className="srex-btn srex-btn--outline ">
                  Know More About Us <i className="fa-solid fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 px-0">
            <div data-aos="fade-up" data-aos-delay="800" className="srex-about-us-one__right">
              <img src="/images/about-us/about-us.png" alt="About Us" className="srex-about-us-one__right__img " />
              <div>
                <div className="srex-about-us-one__right__box d-flex gap-3 ">
                  <img src="/images/about-us/medal.png" alt="Medal" />
                  <div className="srex-about-us-one__right__box__text">
                    <h2>50 MW+</h2>
                    <p>Installed Capacity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
