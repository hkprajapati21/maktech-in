const Hero = () => {
  return (
    <section className="srex-hero-three relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="srex-hero-three__left position-relative z-3">
              <h1 data-aos="fade-up" className="srex-hero-three__left__title">
                Shining a light on a <span>Brighter</span> future
              </h1>
              <p data-aos="fade-up" data-aos-delay="300" className="srex-hero-three__left__desc">
                And In Order To Make A Business, Brand Advertising And Marketing Plays An Import In Order To solar system policy.
              </p>

              <a data-aos="fade-up" data-aos-delay="600" href="#" className="srex-btn srex-btn--primary">
                Discover More <i className="fa-solid fa-plus"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div data-aos="fade-up" data-aos-delay="700" className="srex-hero-three__right ">
              <img src="/images/home-three/hero-right.png" className="img-fluid" alt="Man" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
