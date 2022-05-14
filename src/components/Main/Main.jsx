import AboutComp from "./AboutComp/AboutComp";
import AboutMore from "./AboutMore/AboutMore";
import s from "./Main.module.css";
import SwiperComp from "./SwiperComp/SwiperComp";
const Main = () => {
  return (
    <main className={s.main}>
      <SwiperComp />
      <AboutComp />
      <AboutMore />
    </main>
  );
};
export default Main;
