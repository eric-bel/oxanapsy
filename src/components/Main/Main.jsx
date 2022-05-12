import AboutComp from "./AboutComp/AboutComp";
import s from "./Main.module.css";
import SwiperComp from "./SwiperComp/SwiperComp";
const Main = () => {
  return (
    <main className={s.main}>
      <SwiperComp />
      <AboutComp />
    </main>
  );
};
export default Main;
