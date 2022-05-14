import s from "./HeaderNav.module.css";
import logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
const HeaderNav = () => {
  return (
    <div className="main_container_padding">
      <div className={s.header_nav}>
        <img className={s.logo} src={logo} alt="logo"></img>
        <nav className={s.nav}>
          <ul className={s.ul}>
            <NavLink
              className={s.navlink}
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "#00b5b5" : "",
                };
              }}
              to="/"
            >
              Главная
            </NavLink>
            <NavLink
              className={s.navlink}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#00b5b5" : "",
                };
              }}
              to="/about"
            >
              Обо мне
            </NavLink>
            <li>Услуги</li>
            <li>Статьи</li>
            <li className={s.contacts}>Связаться</li>
          </ul>
        </nav>
        <BurgerMenu />
      </div>
    </div>
  );
};
export default HeaderNav;
