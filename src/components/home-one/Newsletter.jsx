import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <section className="srex-news-letter srex-section">
      <div className="container">
        <div className="srex-news-letter__box ">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="srex-news-letter__box__left">
                <img src="/images/home-one/letter/news-letter-icon.svg" className="srex-info-box__item__logo" alt="CTA" />
                <h3>Ready to Switch to Solar?</h3>
                <p className="mt-3 mb-0">Book your FREE site survey today and take the first step toward energy independence.</p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="srex-news-letter__box__right d-flex flex-wrap gap-3 justify-content-center justify-content-lg-end">
                <Link to="/contact" className="srex-btn srex-btn--primary">
                  Get Free Survey <i className="fa-solid fa-plus"></i>
                </Link>
                <a href="tel:+919876543210" className="srex-btn srex-btn--outline">
                  Call Now <i className="fa-solid fa-phone"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
