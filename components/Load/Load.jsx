import React from "react";
import { useEffect, useState } from "react";
import s from "./Loader.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const Load = () => {
  const [loading, setLoading] = useState(true);
  const [mainPageLoaded, setMainPageLoaded] = useState(false);

  const textAnimation = {
    hiddenTop: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.3 },
    },
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      setMainPageLoaded(true);
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="preloader"
          className={s.preloader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={textAnimation}
            initial="hiddenTop"
            animate={mainPageLoaded ? "hiddenTop" : "visible"}
            className={s.preloader_logo}
          >
            <div className="spinner"></div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Load;
