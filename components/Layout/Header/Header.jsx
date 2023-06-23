import s from "./Header.module.scss";
import { Input } from "antd";
import MyButton from "../../UI/MyButton/MyButton";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import Burger from "../../UI/Burger/Burger";
import { BiSearch } from "react-icons/bi";
import { Select } from '@chakra-ui/react'

const Header = () => {
  return (
    <header className={`${s.header}`}>
      <div className={s.container}>
        <div className={s.content} style={{ fontWeight: 600 }}>
          <div className={s.content_logo}></div>
          <Input
          className={s.content_search}
            placeholder="Search bar"
            suffix={<BiSearch size={20} />}
          />
          <Select placeholder="Select" className={s.content_select}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <a className={s.content_mentor} href="#">
            Become an Mentor
          </a>
          <div className={s.content_link}>
            <MyButton>Login</MyButton>
          </div>
          <div className={s.content_link}>
            <MyButton>Sign Up</MyButton>
          </div>
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default Header;
