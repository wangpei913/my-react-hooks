import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "antd";
import { DashboardOutlined, ProfileOutlined } from "@ant-design/icons";
import { getMenu } from '../api';

const { SubMenu } = Menu;

function SideMenu(props) {
  const {
    globalHeaderStore: { collapsed },
    // location: { pathname },
    globalTheme: { themeType }
  } = props;
  // let routerDatepath = RouteConfig[0].routes.filter(
  //   (item) => item.path !== "/"
  // );
  const renderIcon = (item) => {
    let com = null;
    switch (item) {
      case "DashboardOutlined":
        com = <DashboardOutlined />;
        break;
      case "ProfileOutlined":
        com = <ProfileOutlined />;
        break;
      default:
        break;
    }
    return com;
  };
  const renderMenu = (data) => {
    return data.map((item) => {
      if (item.routes && item.routes.length > 0) {
        return (
          <SubMenu
            title={item.title}
            key={item.key}
            icon={renderIcon(item.icon)}
          >
            {renderMenu(item.routes)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item
          key={item.key}
          icon={<span className="anticon"><i className="iconfont" style={{ fontSize: 20, margin: '0 5px' }}>{item.icon}</i></span>}
        >
          <NavLink key={item.title} to={item.path}>
            {item.title}
          </NavLink>
        </Menu.Item>
      );
    });
  };

  const [menu, setMenu] = useState([])

  useEffect(() => {
    getMenu().then(res => {
      setMenu(res.data)
    })
  }, [])

  return (
    <Menu
      mode="inline"
      theme={themeType}
      defaultSelectedKeys={['0']}
      defaultOpenKeys={['0']}
      inlineCollapsed={collapsed}
      style={{ width: collapsed ? "80px" : "200px" }}
    >
      {renderMenu(menu)}
    </Menu>
  );
}
export default inject("globalHeaderStore", "globalTheme")(withRouter(observer(SideMenu)));
