import Link from "next/link";
import s from "./LatestBlog.module.scss";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const cardAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1.0,
    transition: { delay: custom * 0.3 },
  }),
};

const LatestBlog = () => {
  const { articles } = useSelector((state) => state.articles);
  return (
    <motion.div initial="hidden" whileInView="visible" className={s.late}>
      <div className="container">
        <h2>The Latest Blog</h2>
        <div className={s.cards}>
          {articles.map((el, index) => (
            <motion.div
              custom={index}
              variants={cardAnimation}
              key={el.id}
              className={s.card}
            >
              <div className={s.card_image}>
                <img src={el.image} alt="image"/>
              </div>
              <div className={s.card_content}>
                <div>
                  <p>{el.date}</p>
                  <p>{el.time}</p>
                </div>
                <h4>{el.title}</h4>
                <p className={s.card__content__desc}>{el.desc}</p>
                <Link href="#" className={s.card__content__link}>
                  {el.read}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LatestBlog;