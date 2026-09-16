import { blogPosts } from "@/assets/data/blogs";
import SectionTop from "@/components/shared/SectionTop";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <SectionTop title="Blogs" breadcrumbs={[{ label: "Blogs" }]} />

      <section className="srex-blog-grid">
        <div className="container">
          <div className="srex-blog-grid__intro">
            <h2>Solar insights, guides, and industry updates</h2>
            <p>
              Practical articles on residential solar, commercial projects, financing, and maintenance from The
              Mechtech Solutions team.
            </p>
          </div>

          <div className="row g-4">
            {blogPosts.map((post) => (
              <div key={post.slug} className="col-lg-4 col-md-6">
                <article className="srex-blog-grid__card">
                  <Link to={`/blogs/${post.slug}`} className="srex-blog-grid__image">
                    <img src={post.image} alt={post.title} />
                  </Link>

                  <div className="srex-blog-grid__body">
                    <span className="srex-blog-grid__category">{post.category}</span>
                    <h3>
                      <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p>{post.excerpt}</p>
                    <div className="srex-blog-grid__meta">
                      <span>
                        <i className="fa-regular fa-user"></i> {post.author}
                      </span>
                    </div>
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
    </>
  );
};

export default Blog;
