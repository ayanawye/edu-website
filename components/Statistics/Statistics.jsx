import { BsFillCollectionPlayFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { BsFlag } from "react-icons/bs";
import Accent from "../../assets/images/accent.png";
import s from "./Statistics.module.scss";
import Mentor from "../Mentor/Mentor";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);

import "swiper/css";
import { Pagination } from "swiper";

const textAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const Statistics = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { innerHeight, pageYOffset } = window;

      if (
        ref.current &&
        ref.current.offsetTop <= innerHeight + pageYOffset - 50
      ) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    whileInView="visible"
      className={s.static}
    >
      <div className={s.container}>
        <div className={s.content}>
          {inView && (
            <>
              <div>
                <BsFillCollectionPlayFill fill="#F72585" size={50} />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <motion.h2
                    whileInView="visible"
                    custom={1}
                    variants={textAnimation}
                    className={`${s.__num} ${s.__num1}`}
                  ></motion.h2>
                  <h2>+</h2>
                </div>
                <p>Courses</p>
              </div>
              <motion.div
                initial="hidden"
                transition={{ duration: 0.1 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
              >
                <BsFillPeopleFill fill="#F72585" size={50} />
                <div style={{ display: "flex", alignItems: "center" }}>
                <motion.h2
                    whileInView="visible"
                    custom={2}
                    variants={textAnimation}
                    className={`${s.__num} ${s.__num2}`}
                  ></motion.h2>
                  <h2>+</h2>
                </div>
                <p>Active Students</p>
              </motion.div>
              <motion.div
                initial="hidden"
                transition={{ duration: 0.1 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
              >
                <BiUserCircle fill="#F72585" size={50} />
                <motion.div style={{ display: "flex", alignItems: "center" }}>
                <motion.h2
                    whileInView="visible"
                    custom={3}
                    variants={textAnimation}
                    className={`${s.__num} ${s.__num3}`}
                  ></motion.h2>
                  <h2>+</h2>
                </motion.div>
                <p>Active Mentor</p>
              </motion.div>
              <motion.div
                initial="hidden"
                transition={{ duration: 0.1 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
              >
                <BsFlag fill="#F72585" size={50} />
                <motion.div style={{ display: "flex", alignItems: "center" }}>
                <motion.h2
                    whileInView="visible"
                    custom={4}
                    variants={textAnimation}
                    className={`${s.__num} ${s.__num4}`}
                  ></motion.h2>
                  <h2>+</h2>
                </motion.div>
                <p>Countries</p>
              </motion.div>
            </>
          )}
        </div>
      </div>
      <div className={s.content_accent}>
        <Image src={Accent} placeholder="blur" alt="accent"/>
      </div>
      <Mentor />
    </motion.div>
  );
};

export default Statistics;
