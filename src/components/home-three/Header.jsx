import { menu } from "@/assets/data/menu";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openedSubmenu, setOpenedSubmenu] = useState("");
  const handleOpenSubmenu = (id) => {
    if (id == openedSubmenu) {
      setOpenedSubmenu("");
    } else {
      setOpenedSubmenu(id);
    }
  };

  return (
    <>
      {/* <!-- Overlay --> */}
      <div className={`overlay ${menuOpen && "overlay--active"}`}></div>

      {/* <!-- Header Start --> */}
      <header className="srex-header srex-header--home-three">
        <div className="container">
          <nav className="ud-main-menu ud-main-menu--home-one d-flex align-items-center justify-content-between" aria-label="Main Navigation">
            <div className="ud-main-menu__logo">
              <Link to="/">
                <img src="/images/mechtech.svg" alt="Mechtech Solutions" />
              </Link>
            </div>
            <ul className="ud-main-menu__links d-none d-lg-flex">
              {menu.map(({ id, title, submenus, url }) => (
                <li key={id}>
                  {url ? (
                    <Link to={url}>{title}</Link>
                  ) : (
                    <>
                      <a href="#">
                        {title} <i className="fa-solid fa-angle-down"></i>
                      </a>
                      <ul className="ud-main-menu__sub-menu">
                        {submenus.map(({ id, title, url }) => (
                          <li key={id}>
                            <Link to={url}>{title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>

            <div onClick={() => setMenuOpen(!menuOpen)} className="ud-hamburger-menu d-block d-lg-none">
              <div className={`ud-hamburger-menu__btn ${menuOpen && "ud-hamburger-menu__btn--active"}`}>
                <span></span>
              </div>
            </div>

            <div className="srex-header__call d-flex align-items-center gap-2 m-0 d-none d-xl-flex">
              <img src="/images/chat.svg" alt="Chat" />
              <div>
                <span>Need help?</span>
                <h4>
                  <a href="tel:+3075550133">(307) 555-0133</a>
                </h4>
              </div>
            </div>
          </nav>
        </div>

        {/* <!-- Side Popup --> */}
        <div className={`ud-side-popup ud-side-popup--home-one ${menuOpen && "ud-side-popup--open"}`}>
          <div className="ud-side-popup__header">
            <div className="ud-side-popup__header-logo">
              <img src="/images/mechtech.svg" alt="Mechtech Solutions" />
            </div>
            <button onClick={() => setMenuOpen(false)} className="side-popup-close">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="ud-side-popup__body">
            <ul className="metismenu" id="side-menu">
              {menu.map(({ id, title, submenus, url }) => (
                <li key={id}>
                  {url ? (
                    <Link to={title}>{title}</Link>
                  ) : (
                    <>
                      <a href="#" onClick={() => handleOpenSubmenu(id)}>
                        {title} <i className="fa-solid fa-plus"></i>
                      </a>
                      <AnimateHeight height={openedSubmenu == id ? "auto" : 0}>
                        <ul className="sub-menu" aria-expanded="false">
                          {submenus.map(({ id, title, url }) => (
                            <li key={id}>
                              <Link to={url}>{title}</Link>
                            </li>
                          ))}
                        </ul>
                      </AnimateHeight>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="ud-side-popup__bottom">
            <div className="ud-side-popup__bottom-info">
              <div className="ud-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
                <i className="fa-solid fa-phone"></i>
                <div className="ud-header-info-box__details">
                  <span>Need Help?</span>
                  <h4>
                    <a href="tel:+3075550133">(307) 555-0133</a>
                  </h4>
                </div>
              </div>
              <div className="ud-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
                <i className="fa-solid fa-paper-plane"></i>
                <div className="ud-header-info-box__details">
                  <span>Shreekol, Dublia Bazar</span>
                  <h4>Pabna, Bangladesh</h4>
                </div>
              </div>
              <div className="ud-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
                <i className="fa-solid fa-envelope"></i>
                <div className="ud-header-info-box__details">
                  <span>Send email</span>
                  <h4>
                    <a href="mailto:hello@example.com">hello@example.com</a>
                  </h4>
                </div>
              </div>
            </div>
            <ul className="ud-side-popup__bottom-socials">
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Side Popup End --> */}
      </header>
    </>
  );
};

export default Header;
