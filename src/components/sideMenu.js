import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "antd";
import { getMenu } from '../api';

const { SubMenu } = Menu;

function SideMenu(props) {
  const {
    globalHeaderStore: { collapsed },
    globalTheme: { themeType },
    location: { pathname }
  } = props;
  const renderMenu = (data) => {
    return data.map((item) => {
      if (item.routes && item.routes.length > 0) {
        return (
          <SubMenu
            title={item.title}
            key={item.key}
            style={{ color: pathname.includes(item.path) && '#1890ff' }}
            icon={<span className="anticon"><i className="iconfont" style={{ fontSize: 20, margin: '0 5px' }}>{item.icon}</i></span>}
          >
            {renderMenu(item.routes)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item
          key={item.key}
          icon={<span className="anticon"><i className="iconfont" style={{ fontSize: 20, margin: '0 5px' }}>{item.icon}</i></span>}
          className={pathname === item.path ? 'ant-menu-item-selected' : ''}
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
    <>
      {
        menu && <Menu
          mode="inline"
          theme={themeType}
          defaultOpenKeys={['0']}
          inlineCollapsed={collapsed}
          style={{ width: collapsed ? "80px" : "200px" }}
        >
          {renderMenu(menu)}
        </Menu>
      }
    </>
  );
}
export default inject("globalHeaderStore", "globalTheme")(withRouter(observer(SideMenu)));
