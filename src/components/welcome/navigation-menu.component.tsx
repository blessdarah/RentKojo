import { Button, Drawer, Menu } from "antd";
import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {
  onClose: () => void;
  visible: boolean;
  login: () => void;
}
export const SidebarNavigation: React.FC<IProps> = ({
  onClose,
  visible,
  login,
}) => {
  return (
    <Drawer
      title="Navigation Menu"
      placement="right"
      closable={false}
      onClose={onClose}
      open={visible}
    >
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to={"/welcome"} className="navItem__link">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={"/welcome"} className="navItem__link">
            Browse products
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={"/welcome"} className="navItem__link">
            About
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to={"/welcome"} className="navItem__link">
            Contact
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Button type="primary" onClick={() => login()}>
            Login / Signup
          </Button>
        </Menu.Item>
      </Menu>
    </Drawer>
  );
};
