import { siteImages } from "@/assets/data/siteImages";

const Faq = () => {
  return (
    <section className="srex-faq-three srex-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="srex-faq-three__left">
              <div data-aos="fade" className="srex-faq-three__left__img">
                <img src={siteImages.about.stepsPerson} alt="Solar expert in India" />
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="srex-faq-three__left__box d-flex gap-3 ">
                <img src="/images/medal-green.png" alt="Medal" />
                <div className="srex-faq-three__left__box__text">
                  <h2>15+ Years</h2>
                  <p>of experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 px-0">
            <div className="srex-section__head">
              <h5 data-aos="fade-up" className="srex-section__head__badge ">
                Our FAQ
              </h5>
              <h2 data-aos="fade-up" data-aos-delay="200" className="srex-section__head__title ">
                Harness the power of the sun with solar energy!
              </h2>
              <div className="srex-accordion accordion" id="faq">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <div className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                      <div className="accordion-header__left">
                        <p className="accordion-header__left__badge">01</p>
                        <h3>What is Equality and solidarity?</h3>
                      </div>
                      <i className="fa-solid fa-angle-down open"></i>
                      <i className="fa-solid fa-angle-up close"></i>
                    </div>
                  </div>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faq">
                    <div className="accordion-body">The generated is therefore always free from repetition, injected humour, or words etc.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                      <div className="accordion-header__left">
                        <p className="accordion-header__left__badge">02</p>
                        <h3>How to inspire humanity?</h3>
                      </div>
                      <i className="fa-solid fa-angle-down open"></i>
                      <i className="fa-solid fa-angle-up close"></i>
                    </div>
                  </div>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faq">
                    <div className="accordion-body">The generated is therefore always free from repetition, injected humour, or words etc.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header">
                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo" role="button">
                      <div className="accordion-header__left">
                        <p className="accordion-header__left__badge">03</p>
                        <h3>Where are Better living programs?</h3>
                      </div>
                      <i className="fa-solid fa-angle-down open"></i>
                      <i className="fa-solid fa-angle-up close"></i>
                    </div>
                  </div>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faq">
                    <div className="accordion-body">The generated is therefore always free from repetition, injected humour, or words etc.</div>
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

export default Faq;
