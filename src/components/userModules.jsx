import React from "react";
import { inject, observer } from "mobx-react";
import { Menu, Dropdown, Avatar } from "antd";
import { withRouter } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const UserModules = (props) => {
  const {
    globalLogin: { username, logout },
    history,
  } = props;

  const clickMenuItem = (e) => {
    switch (e.key) {
      case "out":
        logout();
        history.push("/login");
        break;
      case "center":
        history.push('/center');
        break;
      default:
        break;
    }
  };
  const menu = (
    <Menu onClick={clickMenuItem}>
      <Menu.Item key="center">个人设置</Menu.Item>
      <Menu.Item key="out">退出登录</Menu.Item>
    </Menu>
  );
  return (
    <>
      {
        username === '未登录' ? <a href=" " className="label font-12" onClick={() => clickMenuItem({ key: 'out' })}>去登录</a> : <Dropdown overlay={menu} className="dropdown-box">
          <span>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
            <label className="label font-12">{username}</label>
          </span>
        </Dropdown>
      }
    </>
  );
};
export default inject("globalLogin")(observer(withRouter(UserModules)));
