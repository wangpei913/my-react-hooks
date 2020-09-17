import React from "react";
import { inject, observer } from "mobx-react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "antd";
import { DashboardOutlined, ProfileOutlined } from "@ant-design/icons";

import RouteConfig from "../route/router";
const { SubMenu } = Menu;

function SideMenu(props) {
  const {
    globalHeaderStore: { collapsed },
    location: { pathname },
  } = props;
  let routerDatepath = RouteConfig[0].routes.filter(
    (item) => item.path !== "/"
  );
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
            {renderMenu(item.routes.filter((v) => v.component))}
          </SubMenu>
        );
      }
      return (
        <Menu.Item
          key={item.key}
          icon={renderIcon(item.icon)}
          className={pathname === item.path ? "ant-menu-item-selected" : ""}
        >
          <NavLink key={item.title} to={item.path}>
            {item.title}
          </NavLink>
        </Menu.Item>
      );
    });
  };
  return (
    <Menu
      mode="inline"
      theme="light"
      defaultOpenKeys={[routerDatepath[0].key]}
      inlineCollapsed={collapsed}
      style={{ width: collapsed ? "80px" : "200px" }}
    >
      {renderMenu(routerDatepath)}
    </Menu>
  );
}
export default inject("globalHeaderStore")(withRouter(observer(SideMenu)));
