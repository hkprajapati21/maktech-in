import ContactForm from "@/components/shared/ContactForm";
import { officePhone, officePhoneDisplay } from "@/assets/data/contact";
import OfficeAddress from "@/components/shared/OfficeAddress";

const Contact = () => {
  return (
    <section className="srex-contact srex-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="srex-contact__left ">
              <ContactForm
                subject="Home page contact enquiry - The Mechtech Solutions"
                submitLabel="Submit Now"
                showArrow
              />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="srex-contact__right mt-5">
              <div className="srex-section__head">
                <h5 data-aos="fade-up" className="srex-section__head__badge ">
                  <img src="/images/badge-icon.svg" alt="Badge Icon" />
                  Contact US
                </h5>
                <h2 data-aos="fade-up" data-aos-delay="300" className="srex-section__head__title ">
                  Ready to Switch to Solar?
                </h2>
                <p data-aos="fade-up" data-aos-delay="400" className="mt-2 mb-4 ">
                  Book your free site survey today and take the first step toward energy independence. We design, install, and maintain solar for homes, businesses, and government projects.
                </p>

                <div data-aos="fade-up" data-aos-delay="500" className="srex-icon-list srex-icon-list--multi-text">
                  <ul>
                    <li className="">
                      <i className="fa-solid fa-phone"></i>
                      <h4>
                        <a href={`tel:${officePhone}`}>{officePhoneDisplay}</a>
                      </h4>
                    </li>
                    <li className="">
                      <i className="fa-solid fa-envelope"></i>
                      <h4>
                        <a className="contact-email" href="mailto:project@themechtechsolutions.in">project@themechtechsolutions.in</a>
                      </h4>
                    </li>
                    <li className="">
                      <i className="fa-solid fa-location-dot"></i>
                      <OfficeAddress />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
