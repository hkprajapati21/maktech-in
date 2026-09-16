import { companyStats, formatStat } from "@/assets/data/companyStats";
import { siteImages } from "@/assets/data/siteImages";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="srex-hero-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="srex-hero-one__box ">
              <h1 data-aos="fade-up" className="srex-hero-one__box__text">
                <span className="srex-hero-one__box__text__top d-flex align-items-center gap-3 justify-content-between">
                  India&apos;s Trusted
                  <span className="srex-hero-one__box__text__top__line"></span>
                </span>
                Solar Partner - <br />
                From Rooftop to <span>Revolution</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300" className="srex-hero-one__box__desc">
                We design, install, and maintain solar power plants for homes, businesses, industries, and government projects. MNRE Approved. GeM Registered. Results Guaranteed.
              </p>

              <div data-aos="fade-up" data-aos-delay="500" className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="srex-btn srex-btn--outline">
                  Get a Free Site Survey <i className="fa-solid fa-plus"></i>
                </Link>
                <Link to="/services" className="srex-btn srex-btn--primary">
                  Explore Our Services <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="d-flex gap-2 align-items-center justify-content-between ">
              <div className="srex-hero-one__left__enery__efficient">
                <h2>{formatStat(companyStats.projects)}</h2>
                <p>{companyStats.projects.label}</p>
              </div>
              <div className="srex-hero-one__left__img">
                <img src={siteImages.hero.panel} alt="Solar panel installation in India" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="srex-hero-one__right ">
              <img src={siteImages.hero.person} alt="Indian rooftop solar power system installation" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
