import ConnectOnline from "./ConnectOnline/ConnectOnline";
import ContactUs from "./ContactUs/ContactUs";
import s from "./FooterWidgets.module.css";

const FooterWidgets = () => {
  return (
    <div className={s.footer_widgets}>
      <ContactUs />
      <ConnectOnline />
    </div>
  );
};

export default FooterWidgets;
