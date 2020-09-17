import React from "react";
import { inject, observer } from "mobx-react";
import { Menu, Dropdown, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const UserModules = (props) => {
  const {
    globalLogin: { username, logout },
  } = props;

  const clickMenuItem = (e) => {
    switch (e.key) {
      case "out":
        logout();
        break;

      default:
        break;
    }
  };
  const menu = (
    <Menu onClick={clickMenuItem}>
      <Menu.Item key="center">个人中心</Menu.Item>
      <Menu.Item key="set">个人设置</Menu.Item>
      <Menu.Item key="out">退出登录</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} className="dropdown-box">
      <span>
        <Avatar shape="square" size="small" icon={<UserOutlined />} />
        <label className="label">{username}</label>
      </span>
    </Dropdown>
  );
};
export default inject("globalLogin")(observer(UserModules));
