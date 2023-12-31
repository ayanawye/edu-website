import s from "./Footer.module.scss";
import Logo from "../../../assets/images/logo2.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
import { motion } from "framer-motion";
import { Select } from "@chakra-ui/react";

const containerAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const Footer = () => {
  const { footer } = useSelector((state) => state.footerInfo);
  return (
    <motion.footer initial="hidden" whileInView="visible" className={s.footer}>
      <motion.div variants={containerAnimation} className={s.container}>
        <div className={s.content}>
          <div className={s.content_top}>
            <div className={s.content_top__left}>
              <div className={s.content_top__left_image}>
                <Image src={Logo} alt="logo" placeholder="blur" />
              </div>
              <p className={s.content_top__left_desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                tristique placerat eleifend aliquam pellentesque facilisis
                ultrices. Imperdiet mus urna egestas at tellus.{" "}
              </p>
            </div>
            <div className={s.content_top__right}>
              <div className={s.content_top__right_box}>
                {footer.map((el) => (
                  <div key={el.id}>
                    <p className={s.content_top__right_title}>{el.title}</p>
                    {el.desc.map((li) => (
                      <a className={s.content_top__right_link} key={li.id}>
                        {li.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
              <div className={s.content_top__right_select}>
              {footer.map((el) => (
                  <select
                    key={el.id}
                    placeholder={`${el.title}`}
                    className={s.content_top__right_title}
                  >
                    {el.desc.map((li) => (
                      <option className={s.info} key={li.id}>
                        {li.name}
                      </option>
                    ))}
                  </select>
              ))}
              </div>
            </div>
          </div>
          <div className={s.content_bottom}>
            <div className={s.content_bottom__right}>
              <a>Privacy Policy</a>
              <a>Terms and Condition</a>
            </div>
            <a>@2020 TanahAir Studio. All rights reserved.</a>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
