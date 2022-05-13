import s from "./ContactUs.module.css";
import { FaPhone } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const ContactUs = () => {
  return (
    <div className={s.contact_us_container}>
      <div className={s.contact_us_title}>Свяжитесь со мной</div>
      <a className={s.contact_us_phone} href="tel:+375 29 706 74 39">
        <FaPhone className={s.contact_us_phone_icon} />
        <div>+375 29 706 74 39;</div>
      </a>

      <a className={s.contact_us_email} href="mailto:oks-chu2013@yandex.by">
        <GoMail className={s.contact_us_mail_icon} />
        oks-chu2013@yandex.by
      </a>
    </div>
  );
};
export default ContactUs;
