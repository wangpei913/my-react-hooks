import React from "react";
import { inject, observer } from "mobx-react";

import { Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import Search from "./search";
import UserModules from "./userModules";

const Header = ({ globalHeaderStore: { collapsed, toggleCollapsed } }) => {
  return (
    <header className="header-nav">
      <Button
        size="small"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => toggleCollapsed(!collapsed)}
      />
      <span className="toolbar">
        <Search />
        &nbsp; &nbsp;
        <UserModules />
      </span>
    </header>
  );
};

export default inject("globalHeaderStore")(observer(Header));
