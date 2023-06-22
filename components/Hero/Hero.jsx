import { BsBell } from "react-icons/bs";
import { BsPatchCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Input, Space } from "antd";
import MyButton from "../UI/MyButton/MyButton";
import Alarm from "../../assets/images/alarm.png";
import User from "../../assets/images/user-icon.png";
import Video from "../../assets/images/video-library.png";
import Image from "next/image";
import s from "./Hero.module.scss";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

const textAnimation = {
  hidden: {
    x: -50,
    opacity: 0,
    transition: { duration: 2 }
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 1, duration: 0.6 },
  }),
}

const Hero = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 600)) * -24;
    ref.current.style.transform = `translateY(${y}px) rotate(-22deg)`;
  });
  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 600)) * -24;
    ref2.current.style.transform = `translateY(${y}px) rotate(-19deg)`;
  });
  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 600)) * -24;
    ref3.current.style.transform = `translateY(${y}px) rotate(29deg)`;
  });
  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 600)) * -24;
    ref4.current.style.transform = `translateY(${y}px)`;
  });

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 2 }}
      className={s.hero}
    >
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.left}>
            <motion.h1 custom={1} variants={textAnimation} >Find the Best Courses and Amazing Mentor</motion.h1>
            <motion.p  custom={2} variants={textAnimation}  className={s.about}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus
            </motion.p>
            <div className={s.search}>
              <Space.Compact
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Input
                  addonBefore={<BiSearch size={20} />}
                  placeholder="Type in the course you want to learn"
                />
                <div className={s.btn}>
                  <MyButton
                    style={{
                      background: "#F72585",
                      color: "#fff",
                      borderColor: "#F72585",
                    }}
                  >
                    Search
                  </MyButton>
                </div>
              </Space.Compact>
            </div>
            <div className={s.desc}>
              <motion.div custom={3} variants={textAnimation}  >
                <Image src={Alarm} alt="img" />
                <p>Life Time Acces</p>
              </motion.div>
              <motion.div custom={4} variants={textAnimation} >
                <Image src={User} alt="img" />
                <p>Expert Mentor</p>
              </motion.div>
              <motion.div custom={5} variants={textAnimation} >
                <Image src={Video} alt="img" />
                <p>100K+ Courses</p>
              </motion.div>
            </div>
          </div>
          <div className={s.right}>
            <div className={s.right__bg}>
              <motion.div
                initial="hidden"
                transition={{ duration: 0.6 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
                className={s.icon}
                ref={ref}
              >
                <BsBell size={30}  />
              </motion.div>
              <motion.div
              initial="hidden"
              transition={{ duration: 0.6 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
              ref={ref3}
              className={s.icon}>
                <AiOutlineHeart size={30} />
              </motion.div>
              <motion.div 
              initial="hidden"
              transition={{ duration: 0.6 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
              ref={ref2}
              className={s.icon}>
                <BsPatchCheck size={30} />
              </motion.div>
              <motion.div 
              initial="hidden"
              transition={{ duration: 0.6 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
              ref={ref4}
              className={s.box}>
                <h4>500+</h4>
                <p>Total Review</p>
                <div className={s.star}>
                  <AiFillStar fill="#FAA307" />
                  <AiFillStar fill="#FAA307" />
                  <AiFillStar fill="#FAA307" />
                  <AiFillStar fill="#FAA307" />
                  <AiFillStar fill="#FAA307" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
