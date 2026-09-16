import { getServiceBySlug, servicesData } from "@/assets/data/services";
import SectionTop from "@/components/shared/SectionTop";
import { Link, useParams, useSearchParams } from "react-router-dom";

const ServiceDetails = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const activeSlug = slug || searchParams.get("service") || servicesData[0].slug;
  const activeService = getServiceBySlug(activeSlug);

  const half = Math.ceil(activeService.benefits.length / 2);
  const leftBenefits = activeService.benefits.slice(0, half);
  const rightBenefits = activeService.benefits.slice(half);

  return (
    <>
      <SectionTop title="Services" bgImage="/images/projects/services-banner.jpg" />

      <section className="srex-single-project srex-section pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-xs-12">
              <div className="single_ser_info">
                <h4>Services</h4>
                {servicesData.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    className={item.slug === activeService.slug ? "active" : undefined}
                  >
                    {item.title} <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                ))}
              </div>
              <div className="single_brochure">
                <h4>Need Help?</h4>
                <div className="single_bro_doc">
                  <div className="sbd_icon">
                    <i className="fa-regular fa-folder"></i>
                  </div>
                  <h5>Free Site Survey</h5>
                  <p>Book your assessment</p>
                  <div className="sbd_icon_two">
                    <Link to="/contact">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="single_bro_doc">
                  <div className="sbd_icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <h5>Email Us</h5>
                  <p>project@themechtechsolutions.in</p>
                  <div className="sbd_icon_two">
                    <a href="mailto:project@themechtechsolutions.in">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 col-xs-12">
              <div className="single_pro_details single_ser_details">
                <div className="srex-single-pro-img">
                  <img src={activeService.image} alt={activeService.title} />
                </div>
                <h1>{activeService.headline}</h1>
                {activeService.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
                <ul>
                  {leftBenefits.map((item) => (
                    <li key={item}>
                      <i className="fa-solid fa-check"></i> {item}
                    </li>
                  ))}
                </ul>
                <ul>
                  {rightBenefits.map((item) => (
                    <li key={item}>
                      <i className="fa-solid fa-check"></i> {item}
                    </li>
                  ))}
                </ul>
                <h4>{activeService.sectionTitle}</h4>
                <p>{activeService.sectionText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
