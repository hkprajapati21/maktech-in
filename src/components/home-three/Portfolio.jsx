import { Link } from "react-router-dom";
import Slider from "react-slick";
const Portfolio = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    fade: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div data-aos="fade" className="srex-portfolio-three srex-section">
      <Slider {...settings} className="srex-portfolio-three__slider">
        <div className="srex-portfolio-three__slider__item">
          <Link to="/projects-details">
            <img src="/images/home-three/projects/project-1.png" alt="Project One" />
          </Link>
        </div>
        <div className="srex-portfolio-three__slider__item">
          <Link to="/projects-details">
            <img src="/images/home-three/projects/project-2.png" alt="Project Two" />
          </Link>
        </div>
        <div className="srex-portfolio-three__slider__item">
          <Link to="/projects-details">
            <img src="/images/home-three/projects/project-3.png" alt="Project Three" />
          </Link>
        </div>
        <div className="srex-portfolio-three__slider__item slick-last">
          <Link to="/projects-details">
            <img src="/images/home-three/projects/project-4.png" alt="Project Four" />
          </Link>
        </div>
        <div className="srex-portfolio-three__slider__item">
          <Link to="/projects-details">
            <img src="/images/home-three/projects/project-2.png" alt="Project Two" />
          </Link>
        </div>
        <div className="srex-portfolio-three__slider__item">
          <Link to="/projects-details">
            <img src="/images/home-three/projects/project-3.png" alt="Project Three" />
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default Portfolio;
