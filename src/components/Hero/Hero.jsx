import { SearchOutlined } from "@ant-design/icons";
import s from "./Hero.module.scss";
import { Input, Space } from "antd";
import MyButton from "../UI/MyButton/MyButton";
import Alarm from "../../assets/images/alarm.png";
import User from "../../assets/images/user-icon.png";
import Video from "../../assets/images/video-library.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={s.hero}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.left}>
            <h1>Find the Best <br />
             Courses and <br /> Amazing Mentor</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus
            </p>
            <div className={s.search}>
              <Space.Compact
                style={{
                  width: "100%",
                  height: "100%"
                }}
              >
                <Input
                  addonBefore={<SearchOutlined />}
                  placeholder="Type in the course you want to learn"
                />
                <div className={s.btn}>
                  <MyButton
                    style={{
                      background: "#F72585",
                      color: "#fff",
                      borderColor: "#F72585",
                    }}
                  >
                    Search
                  </MyButton>
                </div>
              </Space.Compact>
            </div>
            <div className={s.desc}>
              <div>
                <Image src={Alarm} placeholder="blur" />
                <p>Life Time Acces</p>
              </div>
              <div>
                <Image src={User} placeholder="blur" />
                <p>Expert Mentor</p>
              </div>
              <div>
                <Image src={Video} placeholder="blur" />
                <p>100K+ Courses</p>
              </div>
            </div>
          </div>
          <div className={s.right}>
            <div className={s.right__bg}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
