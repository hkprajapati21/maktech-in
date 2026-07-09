import Slider from "react-slick";
const Sponsor = ({ classes }) => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    fade: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className={`srex-sponsor srex-sponsor-three srex-section ${classes}`}>
      <div data-aos="fade" className="container">
        <Slider {...settings} className="srex-sponsor__items ">
          <a href="#" className="srex-sponsor__items-item">
            <img src="/images/home-three/sponsor/sponsor-1.png" alt="Sponsor One" />
          </a>
          <a href="#" className="srex-sponsor__items-item">
            <img src="/images/home-three/sponsor/sponsor-2.png" alt="Sponsor Two" />
          </a>
          <a href="#" className="srex-sponsor__items-item">
            <img src="/images/home-three/sponsor/sponsor-3.png" alt="Sponsor Three" />
          </a>
          <a href="#" className="srex-sponsor__items-item">
            <img src="/images/home-three/sponsor/sponsor-4.png" alt="Sponsor Four" />
          </a>
          <a href="#" className="srex-sponsor__items-item">
            <img src="/images/home-three/sponsor/sponsor-5.png" alt="Sponsor Five" />
          </a>
        </Slider>
      </div>
    </div>
  );
};

export default Sponsor;
