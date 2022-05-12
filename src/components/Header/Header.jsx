import s from "./Header.module.css";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderTop from "./HeaderTop/HeaderTop";
const Header = () => {
  return (
    <header className={s.header}>
      <div className="main_container">
        <div className={s.header_wrapper}>
          <HeaderTop />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};
export default Header;
