import s from "./BurgerMenu.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

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
                strokeWidth="3"
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
                to="/promotions"
              >
                Статьи
              </NavLink>
              {/* <ScrollNavLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  className="border-b border-gray-400 uppercase hover:text-[#16a34a]"
                  onClick={() => setIsNavOpen(false)}
                >
                  Контакты
                </ScrollNavLink> */}
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
        height: 60vh;
        top: 0;
        left: 0;
        background: #edeced;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
    </div>
  );
};
export default BurgerMenu;