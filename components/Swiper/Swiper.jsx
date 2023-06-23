import s from "./Swiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper";
import { useSelector } from "react-redux";

const Swip = () => {
  const { swipers } = useSelector((state) => state.swiper);
  return (
    <div className={s.swip}>
      <div className={s.container}>
        <div className={s.content}>
          <Swiper
            style={{
              "--swiper-navigation-color": "#1C3554",
              "--swiper-navigation-size": "20px",
            }}
            speed={2000}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            {
              swipers.map((swip) => (
                <SwiperSlide key={swip.id} className={s.slide}>
                  <div className={s.slide_image} style={{background: `url("${swip.image}") no-repeat center/contain`}}></div>
                  <div className={s.slide_text}>
                    <p>{swip.title}</p>
                    <p>{swip.author}</p>
                    <p>{swip.desc}</p>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Swip;
