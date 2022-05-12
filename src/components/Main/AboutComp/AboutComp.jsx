import s from "./AboutComp.module.css";
// import chuprinskaya from "../../../assets/images/chuprinskaya1.jpg";
import chuprinskaya from "../../../assets/images/test.png";

const AboutComp = () => {
  return (
    <div className="main_container">
      <div className={s.about_wrapper}>
        <h2 className={s.about_title}>Обо мне</h2>
        <div className={s.about_content_wrapper}>
          <img className={s.about_img} src={chuprinskaya} alt="about_img"></img>
          <div className={s.about_content}>
            <h5 className={s.about_name}>Оксана Чупринская, психолог</h5>
            <div className={s.about_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
            <button className={s.about_btn}>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
