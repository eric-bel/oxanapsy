import s from "./SwiperComp.module.css";
import mainimg1 from "../../../assets/images/canva1.png";
import mainimg2 from "../../../assets/images/mainimg2.jpg";
import mainimg4 from "../../../assets/images/mainimg4.jpg";
import mainimg3 from "../../../assets/images/mainimg5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";

const SwiperComp = () => {
  return (
    <div className="main_container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className={s.swiper_img} src={mainimg1} alt="swiperImg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.swiper_img} src={mainimg2} alt="swiperImg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.swiper_img} src={mainimg4} alt="swiperImg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.swiper_img} src={mainimg3} alt="swiperImg"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default SwiperComp;
