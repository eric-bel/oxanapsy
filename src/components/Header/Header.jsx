// import s from "./Header.module.css";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderTop from "./HeaderTop/HeaderTop";
const Header = () => {
  return (
    <header className="main_container">
      <HeaderTop />
      <HeaderNav />
    </header>
  );
};
export default Header;
