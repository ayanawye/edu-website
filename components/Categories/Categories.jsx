import { useSelector } from "react-redux";
import s from "./Categories.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

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
      <div className="container">
        <h2>Top Categories</h2>
        <div className={s.cards}>
          {categories.map((el, index) => (
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.1 }}
              custom={index}
              variants={textAnimation}
              key={el.id}
              className={`${s.card}`}
            >
              <div className={s.card_image}>
                <img src={el.image} alt="image"/>
                <p>{el.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Categories;
