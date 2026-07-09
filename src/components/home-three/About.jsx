const About = () => {
  return (
    <section className="srex-about-us-three srex-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="srex-about-us-three__left">
              <div className="row">
                <div className="col-lg-6">
                  <img src="/images/home-three/about-us/about-1.png" alt="About One" />
                </div>
                <div className="col-lg-6">
                  <img src="/images/home-three/about-us/about-2.png" alt="About Two" />
                </div>
                <div className="col-lg-6 srex-about-us-three__left__img-3-col">
                  <img className="srex-about-us-three__left__img-3" src="/images/home-three/about-us/about-3.png" alt="About Three" />
                </div>
                <div className="col-lg-6">
                  <div className="srex-about-us-three__left__box">
                    <img src="/images/home-three/windmill.png" alt="Windmill" />
                    <h3>
                      Top Quality <br />
                      Solar Service
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 px-0">
            <div className="srex-section__head">
              <h5 data-aos="fade-up" className="srex-section__head__badge ">
                About US
              </h5>
              <h2 data-aos="fade-up" data-aos-delay="200" className="srex-section__head__title ">
                Harness the power of the sun with solar energy!
              </h2>
              <div data-aos="fade-up" data-aos-delay="400" className="srex-tabs">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">
                      All
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-power-tab" data-bs-toggle="pill" data-bs-target="#pills-power" type="button" role="tab" aria-controls="pills-power" aria-selected="false">
                      Power
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-ecosolar-tab" data-bs-toggle="pill" data-bs-target="#pills-ecosolar" type="button" role="tab" aria-controls="pills-ecosolar" aria-selected="false">
                      EcoSolar
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">
                    <p className="srex-section__head__desc">Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lore m ipsum dolor sit amet, consectetur adipiscing elit. In hac habi</p>
                    <div className="srex-icon-list">
                      <ul>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Mistakes To Avoid to the dummy</p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Your Startup industry standard</p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Knew About Fonts text the printing</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-power" role="tabpanel" aria-labelledby="pills-power-tab" tabIndex="0">
                    <p className="srex-section__head__desc">Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lore m ipsum dolor sit amet, consectetur adipiscing elit. In hac habi</p>
                    <div className="srex-icon-list">
                      <ul>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Mistakes To Avoid to the dummy</p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Your Startup industry standard</p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Knew About Fonts text the printing</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-ecosolar" role="tabpanel" aria-labelledby="pills-ecosolar-tab" tabIndex="0">
                    <p className="srex-section__head__desc">Nullam vel nibh facilisis lectus fermentum ultrices quis non risus. Lore m ipsum dolor sit amet, consectetur adipiscing elit. In hac habi</p>
                    <div className="srex-icon-list">
                      <ul>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Mistakes To Avoid to the dummy</p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Your Startup industry standard</p>
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <p>Knew About Fonts text the printing</p>
                        </li>
                      </ul>
                    </div>
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

export default About;
