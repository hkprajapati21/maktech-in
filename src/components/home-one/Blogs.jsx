import { blogPosts } from "@/assets/data/blogs";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <section className="srex-blog-one srex-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="srex-blog-one__title">
              <div className="srex-section__head ">
                <h5 data-aos="fade-up" className="srex-section__head__badge">
                  <img src="/images/badge-icon.svg" alt="Badge Icon" />
                  Blog &amp; News
                </h5>
                <h2 data-aos="fade-up" data-aos-delay="200" className="srex-section__head__title">
                  Shine Brighter with Solar
                </h2>
              </div>
              <Link data-aos="fade-up" data-aos-delay="400" to="/blogs" className="srex-btn srex-btn--primary ">
                More Blogs <i className="fa-solid fa-plus"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row g-4 srex-blog-one__grid">
          {blogPosts.map((post, index) => (
            <div
              key={post.slug}
              data-aos="fade-in"
              data-aos-delay={index * 200}
              className="col-12 col-lg-4 col-md-6"
            >
              <article className="srex-blog-one__post">
                <Link to={`/blogs/${post.slug}`} className="srex-blog-one__post__img">
                  <img src={post.image} alt={post.title} />
                </Link>

                <div className="srex-blog-one__post__body">
                  <div className="srex-blog-one__post__meta">
                    <span>
                      <i className="fa-solid fa-calendar-alt"></i> {post.date}
                    </span>
                    <span>
                      <i className="fa-solid fa-folder"></i> {post.category}
                    </span>
                  </div>

                  <h3>
                    <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p>{post.excerpt}</p>

                  <Link to={`/blogs/${post.slug}`} className="srex-btn srex-btn--outline">
                    Read More <i className="fa-solid fa-plus"></i>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
