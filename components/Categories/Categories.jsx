import { useSelector } from "react-redux";
import s from "./Categories.module.scss";
import { motion } from "framer-motion";

const textAnimation = {
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

const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  
  return (
    <motion.div initial="hidden" whileInView="visible" className={s.categories}>
      <div className={s.container}>
        <h2>Top Categories</h2>
        <div className={s.cards}>
          {categories.map((el, index) => (
            <motion.div
              custom={index}
              variants={textAnimation}
              key={el.id}
              className={s.card}
            >
              <div
                className={s.image}
                style={{
                  background: `url(${el.image}) no-repeat center/cover`,
                }}
              >
                <p>{el.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
};

export default Categories;
