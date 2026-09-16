import { getBlogBySlug, getRelatedPosts } from "@/assets/data/blogs";
import SectionTop from "@/components/shared/SectionTop";
import { Link, Navigate, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);
  const relatedPosts = getRelatedPosts(slug, 2);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <>
      <SectionTop
        title={post.title}
        breadcrumbs={[
          { label: "Blogs", to: "/blogs" },
          { label: post.title },
        ]}
      />

      <section className="srex-blog-detail">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <article className="srex-blog-detail__article">
                <div className="srex-blog-detail__hero">
                  <img src={post.image} alt={post.title} />
                  <span className="srex-blog-detail__badge">{post.category}</span>
                </div>

                <div className="srex-blog-detail__meta">
                  <span>
                    <i className="fa-regular fa-user"></i> {post.author}
                  </span>
                  <span>
                    <i className="fa-regular fa-calendar-days"></i> {post.date}
                  </span>
                  <span>
                    <i className="fa-regular fa-folder"></i> {post.category}
                  </span>
                </div>

                <h2 className="srex-blog-detail__title">{post.title}</h2>

                {post.content.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}

                <blockquote className="srex-blog-detail__quote">
                  <i className="fa-solid fa-quote-right"></i>
                  <p>{post.quote.text}</p>
                  <span>- {post.quote.author}</span>
                </blockquote>

                <p>{post.closing}</p>

                <div className="srex-blog-detail__highlight">
                  <img src={post.highlight.image} alt={post.highlight.title} />
                  <div>
                    <h4>{post.highlight.title}</h4>
                    <p>{post.highlight.text}</p>
                  </div>
                </div>
              </article>

              <div className="srex-blog-detail__footer">
                <Link to="/blogs" className="srex-btn srex-btn--outline">
                  <i className="fa-solid fa-arrow-left"></i> Back to Blogs
                </Link>
              </div>

              {relatedPosts.length > 0 && (
                <div className="srex-blog-detail__related">
                  <h3>Related Articles</h3>
                  <div className="row g-4">
                    {relatedPosts.map((item) => (
                      <div key={item.slug} className="col-md-6">
                        <article className="srex-blog-grid__card srex-blog-grid__card--compact">
                          <Link to={`/blogs/${item.slug}`} className="srex-blog-grid__image">
                            <img src={item.image} alt={item.title} />
                          </Link>
                          <div className="srex-blog-grid__body">
                            <span className="srex-blog-grid__category">{item.category}</span>
                            <h3>
                              <Link to={`/blogs/${item.slug}`}>{item.title}</Link>
                            </h3>
                            <Link to={`/blogs/${item.slug}`} className="srex-btn srex-btn--outline">
                              Read More <i className="fa-solid fa-plus"></i>
                            </Link>
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
