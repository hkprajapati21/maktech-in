import { companyStats, formatStat } from "@/assets/data/companyStats";
import { siteImages } from "@/assets/data/siteImages";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="srex-about-us-two srex-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-8">
            <div className="srex-section__head ">
              <h5 data-aos="fade-up" className="srex-section__head__badge">
                About Us
              </h5>
              <div data-aos="fade-up" data-aos-delay="200" className="d-flex align-content-center gap-5">
                <h2 className="srex-section__head__title">We Are Solar Professionals. Not Just Panel Sellers.</h2>
                <img src="/images/frame.png" alt="About_Us_Frame" className="srex-about-us-two__img " />
              </div>
              <p data-aos="fade-up" data-aos-delay="300" className="srex-section__head__desc mt-3">
                Building India&apos;s Clean Energy Future - One Rooftop at a Time
              </p>
            </div>
            <div className="srex-about-us-two__left-content ">
              <div data-aos="fade-up" data-aos-delay="400" className="srex-about-us-two__left-content__img">
                <img src={siteImages.about.team} alt="Solar EPC team in India" />
              </div>
              <div data-aos="fade-up" data-aos-delay="600" className="srex-about-us-two__left-content__right ">
                <p>
                  We started with a simple belief - that every Indian home, business, and factory deserves access to clean, affordable solar energy. Since then, we have grown into a full-service solar company that handles everything from the first phone call to the last bolt on your rooftop.
                </p>
                <p>
                  We are an MNRE Approved Solar Vendor and a Government e-Marketplace (GeM) registered supplier. Our team of qualified solar engineers, EPC specialists, and AMC technicians brings together decades of combined experience across residential, commercial, industrial, and government solar projects.
                </p>
                <p>
                  We believe solar isn&apos;t just a product - it is a long-term investment. That is why we offer honest site surveys, accurate system designs, zero-commission financing guidance, and dedicated post-installation support. When you work with us, you are not just buying solar panels. You are partnering with a team that stays with you for the next 25 years.
                </p>
                <div className="srex-icon-list mt-3">
                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      <p>
                        <strong>Mission:</strong> To make solar energy accessible, affordable, and reliable for every Indian - residential or industrial, urban or rural.
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      <p>
                        <strong>Vision:</strong> To be India&apos;s most trusted renewable energy EPC company, known for transparency, technical excellence, and long-term client relationships.
                      </p>
                    </li>
                  </ul>
                </div>
                <Link to="/contact" className="srex-btn srex-btn--primary mt-4">
                  Get a Free Site Survey <i className="fa-solid fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <img src={siteImages.about.field} alt="Commercial solar project in India" className="srex-about-us-two__right-content__img " />
            <div data-aos="fade-up" data-aos-delay="800" className="srex-about-us-two__box d-flex gap-3 ">
              <img src="/images/about-us/medal.png" alt="Medal" />
              <div className="srex-about-us-two__box__text">
                <h2>{formatStat(companyStats.projects)}</h2>
                <p>Projects Executed</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="900" className="srex-about-us-two__box d-flex gap-3 mt-3">
              <img src="/images/about-us/medal.png" alt="Medal" />
              <div className="srex-about-us-two__box__text">
                <h2>{formatStat(companyStats.capacity)}</h2>
                <p>Capacity Installed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
