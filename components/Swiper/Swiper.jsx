import s from "./Swiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Swip = () => {
  const { swipers } = useSelector((state) => state.swiper);
  return (
    <div className={s.swip}>
      <div className="container">
        <div className={s.content}>
          <Swiper
            style={{
              "--swiper-navigation-color": "#93A1C8",
              "--swiper-navigation-size": "30",
            }}
            loop
            speed={1100}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {swipers.map((swip) => (
              <SwiperSlide key={swip.id}>
                <motion.div
                  whileInView="visible"
                  initial="hidden"
                  variants={{
                    hidden: { scale: 0.6 },
                    visible: { scale: 1 },
                  }}
                  className={s.slide}
                >
                  <div className={s.slide_image}>
                    <img src={swip.image} alt="image" />
                  </div>
                  <div className={s.slide_text}>
                    <p>{swip.title}</p>
                    <p>{swip.author}</p>
                    <p>{swip.desc}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Swip;
