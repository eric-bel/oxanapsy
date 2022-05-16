import Certificates from "./Certificates/Certificates";
import blossom from "../../assets/images/aboutPage/blossom1.jpg";
import s from "./About.module.css";
import AboutPageInfo from "./AboutPageInfo/AboutPageInfo";

const About = () => {
  return (
    <div className="main_container">
      <img src={blossom} alt="blossom" className={s.about_blossom} />
      <div className="main_container main_padding">
        <AboutPageInfo />
        <Certificates />
      </div>
    </div>
  );
};
export default About;
