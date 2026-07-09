import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="srex-blog-three srex-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="srex-blog-three__title">
              <div className="srex-section__head ">
                <h5 data-aos="fade" className="srex-section__head__badge">
                  Our Blogs
                </h5>
                <h2 data-aos="fade" data-aos-delay="200" className="srex-section__head__title">
                  Let&apos;s Checkout our All Latests Blog
                </h2>
              </div>
              <Link to="blogs" className="srex-btn srex-btn--primary ">
                Discover More <i className="fa-solid fa-plus"></i>
              </Link>
            </div>
          </div>
          <div data-aos="fade" className="col-12 col-lg-4 col-md-6">
            <div className="srex-blog-three__post ">
              <Link to="/blog-details" className="srex-blog-three__post__img">
                <img src="/images/home-one/blog/blog-2.png" alt="Blog" />
              </Link>
              <h3>
                <Link to="/blog-details">Explore the world like never before travel experience</Link>
              </h3>
              <div className="d-flex justify-content-between align-items-center gap-5 srex-blog-three__post__meta">
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-user-alt"></i>
                  <h6>By Admin</h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-calendar-alt"></i>
                  <h6>October 19, 2022</h6>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade" data-aos-delay="300" className="col-12 col-lg-4 col-md-6">
            <div className="srex-blog-three__post ">
              <Link to="/blog-details" className="srex-blog-three__post__img">
                <img src="/images/home-one/blog/blog-1.png" alt="Blog" />
              </Link>
              <h3>
                <Link to="/blog-details">Explore the world like never before travel experience</Link>
              </h3>
              <div className="d-flex justify-content-between align-items-center gap-5 srex-blog-three__post__meta">
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-user-alt"></i>
                  <h6>By Admin</h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-calendar-alt"></i>
                  <h6>October 19, 2022</h6>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade" data-aos-delay="600" className="col-12 col-lg-4 col-md-6">
            <div className="srex-blog-three__post ">
              <Link to="/blog-details" className="srex-blog-three__post__img">
                <img src="/images/home-one/blog/blog-3.png" alt="Blog" />
              </Link>
              <h3>
                <Link to="/blog-details">Explore the world like never before travel experience</Link>
              </h3>
              <div className="d-flex justify-content-between align-items-center gap-5 srex-blog-three__post__meta">
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-user-alt"></i>
                  <h6>By Admin</h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-calendar-alt"></i>
                  <h6>October 19, 2022</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
