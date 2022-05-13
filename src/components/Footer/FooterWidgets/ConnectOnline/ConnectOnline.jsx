import s from "./ConnectOnline.module.css";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";

const ConnectOnline = () => {
  return (
    <div className={s.connect_online}>
      <div className={s.connect_online_title}>Соц. сети</div>
      <a
        className={s.connect_online_facebook}
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/oksana.chuprinskaja"
      >
        <GrFacebookOption className={s.connect_online_facebook_icon} />
        <div>Facebook</div>
      </a>

      <a
        className={s.connect_online_instagram}
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/oksana.chuprinskaja"
      >
        <IoLogoInstagram className={s.connect_online_instagram_icon} />
        Instagram
      </a>
    </div>
  );
};
export default ConnectOnline;
