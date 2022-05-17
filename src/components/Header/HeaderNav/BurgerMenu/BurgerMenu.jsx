import s from "./BurgerMenu.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-scroll";

const BurgerMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className={s.burger_menu}>
      <nav>
        <section className={s.section}>
          <div
            className={s.burger_menu_icon}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className={s.span}></span>
            <span className={s.span}></span>
            <span className={s.span}></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className={s.svg_container}
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className={s.svg}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className={s.ul}>
              <NavLink
                className={s.nav_link}
                onClick={() => setIsNavOpen(false)}
                style={({ isActive }) => {
                  return {
                    display: "block",
                    color: isActive ? "#00b5b5" : "",
                  };
                }}
                to="/"
              >
                Главная
              </NavLink>
              <NavLink
                className={s.nav_link}
                onClick={() => setIsNavOpen(false)}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#00b5b5" : "",
                  };
                }}
                to="/about"
              >
                Обо мне
              </NavLink>
              <NavLink
                className={s.nav_link}
                onClick={() => setIsNavOpen(false)}
                to="/services"
              >
                Услуги
              </NavLink>
              <NavLink
                className={s.nav_link}
                onClick={() => setIsNavOpen(false)}
                to="/blog"
              >
                Блог
              </NavLink>
              <li className={s.contacts}>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  onClick={() => setIsNavOpen(false)}
                >
                  Связаться
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 50vh;
        top: 1;
        left: 0;
        background: #edeced;
        z-index: 50;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        -webkit-box-shadow: 0px 5px 21px -11px rgba(34, 60, 80, 0.22);
        -moz-box-shadow: 0px 5px 21px -11px rgba(34, 60, 80, 0.22);
        box-shadow: 0px 5px 21px -11px rgba(34, 60, 80, 0.22);
      }
    `}</style>
    </div>
  );
};
export default BurgerMenu;
