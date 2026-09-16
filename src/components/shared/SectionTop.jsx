import { Fragment } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SectionTop = ({ title, breadcrumbs, bgImage }) => {
  const items = breadcrumbs ?? [{ label: title }];
  const sectionStyle = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  return (
    <section className={`section-top${bgImage ? " section-top--custom-bg" : ""}`} style={sectionStyle}>
      <div className="container">
        <div className="col-lg-10 offset-lg-1 text-center">
          <div className="section-top-title">
            <h1>{title}</h1>
            <ul className="d-flex align-items-center gap-2 justify-content-center flex-wrap">
              <li>
                <Link to="/">Home</Link>
              </li>
              {items.map((item, index) => (
                <Fragment key={`${item.label}-${index}`}>
                  <li>
                    <i className="fa fa-chevron-right fs-6"></i>
                  </li>
                  <li>{item.to ? <Link to={item.to}>{item.label}</Link> : item.label}</li>
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTop;
