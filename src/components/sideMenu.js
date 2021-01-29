import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "antd";
import { getMenu } from '../api';

const { SubMenu } = Menu;

function SideMenu(props) {
  const {
    globalHeaderStore: { collapsed },
    location: { pathname },
    globalTheme: { themeType },
  } = props;
  const renderMenu = (data) => {
    return data.map((item) => {
      if (item.routes && item.routes.length > 0) {
        return (
          <SubMenu
            title={item.title}
            key={item.key}
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
        >
          <NavLink key={item.title} to={item.path}>
            {item.title}
          </NavLink>
        </Menu.Item>
      );
    });
  };

  const [menu, setMenu] = useState([])
  const [current, setCurrent] = useState('');
  useEffect(() => {
    getMenu().then(res => {
      setMenu(res.data.data)
      const findkey = (data) => {
        data.forEach(item => {
          if (item.routes && item.routes.length > 0) {
            findkey(item.routes)
          }
          if (item.path === pathname) {
            setCurrent(item.key)
          }
        })
      }
      findkey(res.data.data)
    })
  }, [pathname]);
  return (
    <>
      {
        menu && <Menu
          mode="inline"
          theme={themeType}
          defaultOpenKeys={['0']}
          selectedKeys={[current]}
          inlineCollapsed={collapsed}
          onClick={(e) => setCurrent(e.key)}
          style={{ width: collapsed ? "80px" : "200px" }}
        >
          {renderMenu(menu)}
        </Menu>
      }
    </>
  );
}
export default inject("globalHeaderStore", "globalTheme")(withRouter(observer(SideMenu)));
