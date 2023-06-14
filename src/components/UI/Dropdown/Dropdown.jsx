import s from './Dropdown.module.scss';
import Link from "next/link";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DropdownItem = () => {
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer">
          <Link href="/">first</Link>
        </a>
      ),
    },
  ];
  return (
    <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space style={{fontWeight: "700"}}>
                Category
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
  );
};

export default DropdownItem;