import {
  officeMapEmbedUrl,
  officePhone,
  officePhoneDisplay,
  officePhoneSecondary,
  officePhoneSecondaryDisplay,
  whatsappLink,
  whatsappPhoneDisplay,
} from "@/assets/data/contact";
import ContactForm from "@/components/shared/ContactForm";
import OfficeAddress from "@/components/shared/OfficeAddress";
import SectionTop from "@/components/shared/SectionTop";

const contactDetails = [
  {
    icon: "fa-location-dot",
    title: "Address",
    content: <OfficeAddress />,
  },
  {
    icon: "fa-envelope",
    title: "Email Address",
    content: (
      <p>
        <a className="contact-email" href="mailto:project@themechtechsolutions.in">
          project@themechtechsolutions.in
        </a>
      </p>
    ),
  },
  {
    icon: "fa-phone",
    title: "Call Us",
    content: (
      <p>
        <a href={`tel:${officePhone}`}>{officePhoneDisplay}</a>,{" "}
        <a href={`tel:${officePhoneSecondary}`}>{officePhoneSecondaryDisplay}</a>
      </p>
    ),
  },
  {
    icon: "fa-brands fa-whatsapp",
    title: "WhatsApp",
    content: (
      <p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          {whatsappPhoneDisplay}
        </a>
      </p>
    ),
  },
];

const Contact = () => {
  return (
    <>
      <SectionTop title="Contact Us" />

      <section className="srex-contact-page">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-6">
              <div className="srex-contact-page__card">
                <div className="srex-contact-page__intro">
                  <span className="srex-contact-page__eyebrow">- Information</span>
                  <h2 className="srex-contact-page__title">Get In touch</h2>
                  <p>
                    Ready to switch to solar? Book your free site survey today and take the first step toward energy
                    independence. Our team is here to help with residential, commercial, and government projects.
                  </p>
                </div>

                <div className="srex-contact-page__details">
                  {contactDetails.map((item) => (
                    <div className="srex-contact-page__detail" key={item.title}>
                      <div className="srex-contact-page__detail-icon">
                        <i className={`fa-solid ${item.icon}`}></i>
                      </div>
                      <div className="srex-contact-page__detail-content">
                        <h4>{item.title}</h4>
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="srex-contact-page__card srex-contact-page__form">
                <div className="srex-contact-page__intro">
                  <span className="srex-contact-page__eyebrow">- Message Us</span>
                  <h2 className="srex-contact-page__title">Send Us Message</h2>
                </div>

                <ContactForm subject="Contact form enquiry - The Mechtech Solutions" submitLabel="Send A Message" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="srex-contact-page__map">
        <div className="container">
          <div className="srex-contact-page__map-inner">
            <iframe
              src={officeMapEmbedUrl}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="The Mechtech Solutions office - Silvassa"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
