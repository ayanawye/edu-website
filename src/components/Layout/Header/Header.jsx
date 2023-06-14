import s from "./Header.module.scss";
import Logo from "../../../assets/images/logo.png";
import Image from "next/image";
import { Input } from "antd";
import MyButton from "@/components/UI/MyButton/MyButton";
import { Montserrat  } from 'next/font/google'
import Dropdown from "@/components/UI/Dropdown/Dropdown";

const font = Montserrat ({ subsets: ['latin'] })
const { Search } = Input;

const Header = () => {
  const onSearch = (value) => console.log(value);

  return (
    <header className={`${s.header} ${font.className}`}>
      <div className={s.container}>
        <div className={s.content} style={{fontWeight: 600}}>
          <Image placeholder="blur" src={Logo} />
          <Search
            placeholder="Search bar"
            onSearch={onSearch}
            style={{
              width: "30%",
            }}
          />
          <Dropdown/>
          <a href="#">Become an Mentor</a>
          <div style={{width: "8%", height: "45%"}}>
          <MyButton>Login</MyButton>
          </div>
          <div style={{width: "8%", height: "45%"}}>
          <MyButton>Sign Up</MyButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
