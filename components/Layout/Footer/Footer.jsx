import s from "./Footer.module.scss";
import Logo from "../../../assets/images/logo2.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";

const Footer = () => {
  const { footer } = useSelector((state) => state.footerInfo);
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.content_top}>
            <div className={s.content_top__left}>
              <div className={s.content_top__left_image}>
                <Image
                  src={Logo}
                  alt="logo"
                  placeholder="blur"
                />
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
                {footer.map((el) => (
                  <Menu key={el.id}>
                    <MenuButton
                      className={`${s.content_top__right_title} ${s.content_top__right_menu}`}
                      as={Button}
                      rightIcon={<AiOutlineDown />}
                    >
                      {el.title}
                    </MenuButton>
                    <MenuList>
                      {el.desc.map((li) => (
                        <MenuItem className={s.info} key={li.id}>
                          {li.name}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                ))}
            </div>
          </div>
          <div className={s.content_bottom}>
            <div className={s.content_bottom__right}>
              <p>Privacy Policy</p>
              <p>Terms and Condition</p>
            </div>
            <p>@2020 TanahAir Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
