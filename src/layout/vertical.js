import React, { useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { renderRoutes } from "react-router-config";
import SideMenu from "../components/sideMenu";
import RouteConfig from "../route/router";

function Vertical() {
  const [isType, setType] = useState(false);
  return (
    <div className="vertical-layout">
      <header className="vertical-header">
        <span onClick={() => setType(!isType)}>
          {isType ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        </span>
      </header>
      <main className="main-content">{renderRoutes(RouteConfig)}</main>
      <Drawer
        className="left-drawer"
        title="相信美好的事情即将发生"
        placement="left"
        closable={false}
        onClose={() => setType(false)}
        visible={isType}
      >
        <SideMenu />
      </Drawer>
    </div>
  );
}
export default Vertical;
