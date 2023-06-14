import s from "./Footer.module.scss";
import Logo from "../../../assets/images/logo2.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.top}>
            <div className={s.left}>
              <div className={s.image}>
                <Image
                  src={Logo}
                  className={s.img}
                  alt="logo"
                  placeholder="blur"
                />
              </div>
              <p className={s.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                tristique placerat eleifend aliquam pellentesque facilisis
                ultrices. Imperdiet mus urna egestas at tellus.{" "}
              </p>
            </div>
            <div className={s.right}>
              <div className={s.box}>
                <div>
                  <p className={s.right_title}>About</p>
                  <p className={s.info}>About us</p>
                  <p className={s.info}>Courses</p>
                  <p className={s.info}>Mentor</p>
                  <p className={s.info}>Contact Us</p>
                </div>
                <div>
                  <p className={s.right_title}>Support</p>
                  <p className={s.info}>Careers</p>
                  <p className={s.info}>Help & Support</p>
                  <p className={s.info}>Blog</p>
                </div>
                <div>
                  <p className={s.right_title}>Company</p>
                  <p className={s.info}>Privacy Policy</p>
                  <p className={s.info}>Terms of Service</p>
                  <p className={s.info}>Code of Conduct</p>
                </div>
              </div>
            </div>
          </div>
          <div className={s.bottom}>
            <div>
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
