import React from "react";
import { useEffect, useState } from "react";
import s from "./Load.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Photo from "../../assets/images/group.png";

const Load = () => {
  const [loading, setLoading] = useState(false);
  const [mainPageLoaded, setMainPageLoaded] = useState(false);

  const textAnimation = {
    hiddenTop: {
      y: -1000,
      opacity: 0,
    },
    hiddenBottom: {
      y: 1000,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 1 },
    }),
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      document.body.style.overflow = "auto";
    }, 3000);
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
      {!loading ? (
        <motion.div
          key="preloader"
          className={s.preloader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className={s.preloader_loader}>
            <h1>Кутуп тур, олуп кетпейсин!</h1>
            <div className="pyramid-loader">
              <div className="wrapper">
                <span className="side side1"></span>
                <span className="side side2"></span>
                <span className="side side3"></span>
                <span className="side side4"></span>
                <span className="shadow"></span>
              </div>
            </div>
          </div>
          {/* <motion.div
            variants={textAnimation}
            initial="hiddenBottom"
            animate={mainPageLoaded ? "hiddenBottom" : "visible"}
            className={s.preloader_right_cloud}
          ></motion.div> */}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Load;
