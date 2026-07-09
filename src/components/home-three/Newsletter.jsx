const Newsletter = () => {
  return (
    <section className="srex-news-letter srex-news-letter--three pb-120">
      <div className="container">
        <div className="srex-news-letter__box ">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div data-aos="fade" className="srex-news-letter__box__left flex align-content-center justify-content-between">
                <img src="/images/trees.svg" className="srex-info-box__item__logo" alt="NewsLetter" />
                <h2>Subscribe Our Newsletter</h2>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="srex-news-letter__box__right">
                <form data-aos="fade" data-aos-delay="200" className="text-center">
                  <input placeholder="Enter your email" type="text" />
                  <button type="button" className="srex-btn srex-btn--white">
                    Subscribe Now <i className="fa-solid fa-plus"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
