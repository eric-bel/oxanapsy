import s from "./AboutComp.module.css";
import chuprinskaya from "../../../assets/images/test.png";
// import { NavLink } from "react-router-dom";

const AboutComp = () => {
  return (
    <div className="main_container">
      <div className={s.about_wrapper}>
        <h2 className={s.about_title}>Обо мне</h2>
        <div className={s.about_content_wrapper}>
          <img className={s.about_img} src={chuprinskaya} alt="about_img"></img>
          <div className={s.about_content}>
            <h1 className={s.about_name}>Оксана Чупринская, психолог</h1>
            <div className={s.about_text}>
              Здравствуй, дорогой гость моего сайта, давай знакомиться, я Оксана
              Чупринская, практикующий психолог. Предоставляю очные и
              онлайн-консультации для русскоязычных людей по всему миру. Мой
              стиль консультирования теплый и интерактивный. Я считаю, что ко
              всем нужно относиться с уважением, чуткостью и состраданием.
              Онлайн-терапия позволяет нам гибко встречаться там, где мы
              выберем, без спешки на путь в офис. 
            </div>
            {/* <NavLink className={s.about_btn} to="/about">
              Подробнее
            </NavLink> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
