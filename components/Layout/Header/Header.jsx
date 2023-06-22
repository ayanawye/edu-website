import s from "./Header.module.scss";
import Image from "next/image";
import { Input } from "antd";
import MyButton from "../../UI/MyButton/MyButton";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react'
import Burger from "../../UI/Burger/Burger";
import { BiSearch } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  return (
    <header className={`${s.header}`}>
      <div className={s.container}>
        <div className={s.content} style={{ fontWeight: 600 }}>
          <div className={s.logo}></div>
          <Input
            className={s.search}
            placeholder="Search bar"
            suffix={<BiSearch size={20} />}
          />
          <Menu>
            <MenuButton className={s.menu} as={Button} rightIcon={<AiOutlineDown />}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
          <a className={s.link} href="#">
            Become an Mentor
          </a>
          <div className={s.btn}>
            <MyButton>Login</MyButton>
          </div>
          <div className={s.btn}>
            <MyButton>Sign Up</MyButton>
          </div>
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default Header;
