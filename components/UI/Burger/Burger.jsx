import { useState } from "react";
import { motion } from "framer-motion";
import s from "./Burger.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={s.menu}
    >
      <motion.div className={s.flex}>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          className={s.btn}>
          Меню
        </motion.button>
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          onClick={() => setIsOpen(!isOpen)}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
          className={s.svg}
        >
          <svg width="15" height="15" viewBox="0 0 20 20" fill="#fff">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.div>
      <motion.ul
        className={s.ul}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
          <motion.li variants={itemVariants}><Link href="#">Become an Mentor</Link></motion.li>
          <motion.li variants={itemVariants}><Link href="#">Login</Link></motion.li>
          <motion.li variants={itemVariants}><Link href="#">Sing Up</Link></motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default Burger;