import MyButton from "../UI/MyButton/MyButton";
import s from "./Mentor.module.scss";
import { motion } from "framer-motion";

const Mentor = () => {
  return (
    <motion.div
      transition={{ duration: 2, once: true }}
      initial="hidden"
      whileInView="visible"
      autoPlay={{ delay: 2000 }}
      className={s.mentor}
    >
      <div className="container">
        <div className={s.content}>
          <motion.div
            initial="hidden"
            transition={{ duration: 0.1, once: true }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.content_image}
          ></motion.div>
          <motion.div
            initial="hidden"
            transition={{ duration: 0.1, once: true }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.content_right}
          >
            <h2>Become an Mentor</h2>
            <p className={s.content_right__desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum
              a turpis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum
              a turpis
            </p>
            <motion.div 
            initial="hidden"
            transition={{ duration: 0.1, once: true }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.content_right__btn}>
              <MyButton
                style={{
                  background: "#F72585",
                  color: "#fff",
                  borderColor: "#F72585",
                  padding: "14px 0",
                }}
              >
                Start Teaching
              </MyButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Mentor;
