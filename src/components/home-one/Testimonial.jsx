import { siteImages } from "@/assets/data/siteImages";
import Slider from "react-slick";

const testimonials = [
  {
    quote: "The Mechtech Solutions handled everything from site survey to net metering. Our electricity bill dropped by 85% in the first month. Highly recommended!",
    name: "Rajesh Kumar",
    role: "Homeowner, Jaipur - 5 kW System",
  },
  {
    quote: "We installed a 500 kW plant for our factory. The team was professional, on schedule, and the O&M support has been excellent.",
    name: "Priya Sharma",
    role: "Factory Owner, Pune - 500 kW Plant",
  },
  {
    quote: "As a GeM registered supplier, they executed our government solar project with full compliance. Transparent pricing and great execution.",
    name: "Amit Patel",
    role: "Government Project, Gujarat - 100 kW",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <section className="srex-testimonial-one">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-12">
            <div className="srex-testimonial-one__left text-left">
              <div className="srex-section__head">
                <h2 className="srex-section__head__title ">Our Clients Say It Best</h2>
              </div>

              <Slider {...settings} className="srex-testimonial-one__slider ">
                {testimonials.map(({ quote, name, role }) => (
                  <div key={name} className="srex-testimonial-one__slider__item">
                    <img src="/images/quote.svg" alt="Quote" className="srex-testimonial-one__slider__item__quote" />
                    <p className="srex-testimonial-one__slider__item__text">&quot;{quote}&quot;</p>
                    <div className="srex-testimonial-one__slider__item__author">
                      <h3>{name}</h3>
                      <p>{role}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="srex-testimonial-one__right">
              <img src={siteImages.testimonial.person} alt="Happy solar customer in India" className="srex-testimonial-one__right__img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
