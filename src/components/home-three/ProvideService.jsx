const ProvideService = () => {
  return (
    <section className="srex-service-we-provide srex-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="srex-section__head srex-section__head--mw ">
              <h5 data-aos="fade-up" className="srex-section__head__badge">
                We Provide
              </h5>
              <h2 data-aos="fade-up" data-aos-delay="200" className="srex-section__head__title">
                Unlock the potential of the sun with solar energy!
              </h2>
            </div>
          </div>
        </div>

        <div className="row srex-service-we-provide__items">
          <div data-aos="fade-up" className="col-lg-4 col-12">
            <div className="srex-portfolio-two__item">
              <img src="/images/home-three/we-provide/service-1.png" alt="Service One" />
              <div className="srex-portfolio-two__item__box">
                <p>Field is Futures</p>
                <h3>Agricultural consulting</h3>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="col-lg-4 col-12">
            <div className="srex-portfolio-two__item">
              <img src="/images/home-three/we-provide/service-2.png" alt="Service Two" />
              <div className="srex-portfolio-two__item__box">
                <p>Field is Futures</p>
                <h3>Agricultural consulting</h3>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className="col-lg-4 col-12">
            <div className="srex-portfolio-two__item">
              <img src="/images/home-three/we-provide/service-3.png" alt="Service Three" />
              <div className="srex-portfolio-two__item__box">
                <p>Grow naturally</p>
                <h3>Agricultural consulting</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvideService;
