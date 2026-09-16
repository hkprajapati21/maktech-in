import { blogPosts } from "@/assets/data/blogs";
import { servicesData } from "@/assets/data/services";
import SectionTop from "@/components/shared/SectionTop";
import { Link } from "react-router-dom";

const mainPages = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/about-us" },
  { title: "Our Services", url: "/services" },
  { title: "Projects & Installations", url: "/projects" },
  { title: "Blogs & Insights", url: "/blogs" },
  { title: "Contact Us", url: "/contact" },
];

const Sitemap = () => {
  return (
    <>
      <SectionTop title="Website Sitemap" bgImage="/images/projects/services-banner.jpg" />

      <section className="srex-section pt-100 pb-100">
        <div className="container">
          <div className="row g-4">
            {/* Main Pages */}
            <div className="col-12 col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 border">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <i className="fa-solid fa-compass text-primary fs-4"></i>
                  <h3 className="m-0 fs-5 fw-bold">Main Pages</h3>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  {mainPages.map((page) => (
                    <li key={page.url}>
                      <Link
                        to={page.url}
                        className="text-secondary d-flex align-items-center gap-2 fs-6 fw-medium text-decoration-none"
                      >
                        <i className="fa-solid fa-angle-right text-primary fs-7"></i>
                        <span>{page.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="col-12 col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 border">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <i className="fa-solid fa-solar-panel text-primary fs-4"></i>
                  <h3 className="m-0 fs-5 fw-bold">Solar Services ({servicesData.length})</h3>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  {servicesData.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={`/services/${service.slug}`}
                        className="text-secondary d-flex align-items-center gap-2 fs-6 fw-medium text-decoration-none"
                      >
                        <i className="fa-solid fa-angle-right text-primary fs-7"></i>
                        <span>{service.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Articles & Technical */}
            <div className="col-12 col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 border d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className="fa-solid fa-newspaper text-primary fs-4"></i>
                    <h3 className="m-0 fs-5 fw-bold">Articles & Insights</h3>
                  </div>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                    {blogPosts.map((post) => (
                      <li key={post.slug}>
                        <Link
                          to={`/blogs/${post.slug}`}
                          className="text-secondary d-flex align-items-center gap-2 fs-6 fw-medium text-decoration-none"
                        >
                          <i className="fa-solid fa-angle-right text-primary fs-7"></i>
                          <span>{post.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-light rounded-3 border">
                  <h5 className="fs-6 fw-bold mb-1 text-primary">Search Engine XML Feed</h5>
                  <p className="text-secondary fs-7 mb-2">Raw XML format for Google & Bing web crawlers:</p>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm rounded-pill d-inline-flex align-items-center gap-2"
                  >
                    <i className="fa-solid fa-code"></i>
                    <span>View sitemap.xml</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sitemap;
