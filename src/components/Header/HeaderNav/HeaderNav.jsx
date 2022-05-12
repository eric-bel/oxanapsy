import s from "./HeaderNav.module.css";
import logo from "../../../assets/images/logo.png";

const HeaderNav = () => {
  return (
    <div className={s.header_nav}>
      <img className={s.logo} src={logo} alt="logo"></img>
      <nav className={s.nav}>
        <ul className={s.ul}>
          <li>Главная</li>
          <li>Обо мне</li>
          <li>Услуги</li>
          <li>Статьи</li>
          <li className={s.contacts}>Контакты</li>
        </ul>
      </nav>
    </div>
  );
};
export default HeaderNav;
