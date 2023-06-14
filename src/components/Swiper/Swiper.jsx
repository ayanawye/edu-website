import s from './Swiper.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Swip = () => {
  return (
    <div className={s.swip}>
      <div className={s.container}>
        <div className={s.content}>
        <Swiper 
        style={{
          "--swiper-navigation-color": "#1C3554",
          "--swiper-navigation-size": "20px"
        }}
        navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className={s.slide}>
          <div className={s.image}></div>
          <div className={s.right}>
             <p>After studying here I gained new knowledge and insights. The mentor was very friendly and guided me to get the knowledge I wanted. Thank you!</p>
             <p className={s.desc}>KecekArif</p>
             <p>Yang punya Surabaya nanti kapan - kapan tapi</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <div className={s.image}></div>
          <div className={s.right}>
             <p>After studying here I gained new knowledge and insights. The mentor was very friendly and guided me to get the knowledge I wanted. Thank you!</p>
             <p className={s.desc}>KecekArif</p>
             <p>Yang punya Surabaya nanti kapan - kapan tapi</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <div className={s.image}></div>
          <div className={s.right}>
             <p>After studying here I gained new knowledge and insights. The mentor was very friendly and guided me to get the knowledge I wanted. Thank you!</p>
             <p className={s.desc}>KecekArif</p>
             <p>Yang punya Surabaya nanti kapan - kapan tapi</p>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Swip;