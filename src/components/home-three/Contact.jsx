const Contact = ({ classes }) => {
  return (
    <section className={`srex-contact--three ${classes}`}>
      <div className="container">
        <div className="row srex-contact--three__row">
          <div className="col-lg-6 col-12">
            <div className="srex-contact__img">
              <img src="/images/home-three/contact-man.png" alt="Contact Man" />
              <a href="https://www.youtube.com/watch?v=bYsgGkKksvs" className="srex-contact__img__play-btn popup-video">
                <i className="fa-solid fa-play"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="srex-contact__left ">
              <div className="srex-section__head ">
                <h2 data-aos="fade" className="srex-section__head__title">
                  write here below?
                </h2>
                <p data-aos="fade" data-aos-delay="200" className="srex-section__head__desc">
                  For your car we will do everything advice, repairs and maintenance. We are the some preferred choice by many car owners because our experience
                </p>
              </div>
              <form action="#">
                <div className="row justify-content-center">
                  <div className="col-md-6 col-12">
                    <input name="full-name" placeholder="Your Name" type="text" required />
                  </div>
                  <div className="col-md-6 col-12">
                    <input name="email" placeholder="Email Address" type="text" required />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-6 col-12">
                    <input placeholder="Your Phone" type="text" name="phone" required />
                  </div>
                  <div className="col-md-6 col-12">
                    <input name="text" placeholder="Subject" type="text" required />
                  </div>
                </div>
                <div>
                  <textarea placeholder="Your Message" id="message" rows="5" name="message" required></textarea>
                </div>
                <div>
                  <button type="button" className="srex-btn srex-btn--secondary">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
