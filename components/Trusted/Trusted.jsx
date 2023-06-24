import Image from "next/image";
import s from "./Trusted.module.scss";
import { images } from "../../imgData";
import { motion } from "framer-motion";

const imageAnimation = {
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

const Trusted = () => {
  return (
    <motion.div initial="hidden" whileInView="visible" className={s.trust}>
      <div className="container">
        <div className={s.trust_title}>
          <h2>Trusted by Company</h2>
        </div>
        <div className={s.trust_images}>
          {images.map((img, index) => (
            <motion.div
              custom={index}
              variants={imageAnimation}
              key={img.id}
              className={s.trust_image}
            >
              <Image placeholder="blur" src={img.src} alt={img.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Trusted;
