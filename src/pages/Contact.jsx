import SectionTop from "@/components/shared/SectionTop";

const Contact = () => {
  return (
    <>
      <SectionTop title="Contact Us" />

      {/* <!-- Contact Section Start --> */}
      <section className="srex-contact--three srex-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="srex_contact_address">
                <div className="srex_contact_content">
                  <h4>- Information</h4>
                  <h1>Get In touch</h1>
                  <p>For your car we will do everything advice, repairs and maintenance. We are the some preferred choice by many car owners because our experience </p>
                </div>
                <div className="srex-single-address">
                  <div className="address_icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <h4>Address</h4>
                  <p>
                    Dhaka 1216. Chipa golli. gele e khobar ache. <br />
                    na gele aro valo{" "}
                  </p>
                </div>
                <div className="srex-single-address">
                  <div className="address_icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <h4>Email Address</h4>
                  <p>example@yourmail.com</p>
                  <p>admin@yourmail.com</p>
                </div>
                <div className="srex-single-address">
                  <div className="address_icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <h4>Phone</h4>
                  <p>+880 0184725965 </p>
                  <p>24 Hours open </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="srex-contact__left srex_contact_address ">
                <div className="srex_contact_content">
                  <h4>- Message Us</h4>
                  <h1>Send Us Message</h1>
                </div>
                <form action="#">
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-12">
                      <input name="full-name" placeholder="Your Name" type="text" required />
                    </div>
                    <div className="col-md-12 col-12">
                      <input name="email" placeholder="Email Address" type="text" required />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-12">
                      <input placeholder="Your Phone" type="text" name="phone" required />
                    </div>
                  </div>
                  <div>
                    <textarea placeholder="Your Message" id="message" rows="5" name="message" required></textarea>
                  </div>
                  <div>
                    <button type="button" className="srex-btn srex-btn--secondary">
                      Send A Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact Section End --> */}

      <div className="map_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.957183635167!2d-74.00402768559431!3d40.71895904512855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a1316e7a7%3A0x47bb20eb6074b3f0!2sNew%20Work%20City%20-%20(CLOSED)!5e0!3m2!1sbn!2sbd!4v1600305497356!5m2!1sbn!2sbd"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
