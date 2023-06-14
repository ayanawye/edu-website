import { BsFillCollectionPlayFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { BsFlag } from "react-icons/bs";
import Accent from '../../assets/images/accent.png'
import s from "./Statistics.module.scss";
import Mentor from "../Mentor/Mentor";
import Image from "next/image";

const Statistics = () => {
  return (
    <div className={s.static}>
      <div className={s.container}>
        <div className={s.content}>
          <div>
            <BsFillCollectionPlayFill fill="#F72585" size={50} />
            <h2>10.000+</h2>
            <p>Courses</p>
          </div>
          <div>
            <BsFillPeopleFill fill="#F72585" size={50} />
            <h2>50.000+</h2>
            <p>Active Students</p>
          </div>
          <div>
            <BiUserCircle fill="#F72585" size={50} />
            <h2>1000+</h2>
            <p>Active Mentor</p>
          </div>
          <div>
            <BsFlag fill="#F72585" size={50} />
            <h2>180</h2>
            <p>Countries</p>
          </div>
        </div>
      </div>
      <div className={s.accent}>
        <Image src={Accent} placeholder="blur" alt="accent" className={s.img} />
      </div>
      <Mentor />
    </div>
  );
};

export default Statistics;
