// import s from "./Footer.module.css";
import FooterWidgets from "./FooterWidgets/FooterWidgets";
import SiteFooter from "./SiteFooter/SiteFooter";
const Footer = () => {
  return (
    <footer className="main_container" id="contact">
      <FooterWidgets />
      <SiteFooter />
    </footer>
  );
};
export default Footer;
