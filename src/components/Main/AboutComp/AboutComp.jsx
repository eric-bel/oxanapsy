import s from "./AboutComp.module.css";
import chuprinskaya from "../../../assets/images/test.png";
import { NavLink } from "react-router-dom";

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
              Приветствую. Меня зовут Оксана Чупринская. Я психолог, магистр
              психологии. В своей работе я эклектична: использую различные
              методы – арт-терапии, сказкотерапии, аддиктологии, медиации,
              эриксоновского гипноза, гештальт-терапии, нарративного подхода. По
              своим принципам являюсь гуманистическим психологом. Предпочтение
              отдаю гуманистично-экзистенциальному подходу.
            </div>
            <NavLink className={s.about_btn} to="/about">
              Подробнее
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
