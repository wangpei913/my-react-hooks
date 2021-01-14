import React, { memo, useState, useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import _ from "loadsh";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import DynamicAntdTheme from 'dynamic-antd-theme';

import renderRoutes from "../route";
import SideMenu from "../components/sideMenu";
import Header from "../components/header";

function AllComponents(props) {
  const {
    globalLogin: { authed },
    route: { routes },
  } = props;
  const authPath = "/login";
  const scrollEle = useRef(null);
  const [isScroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.target.scrollTop > 100) {
        setScroll(true);
      } else if (e.target.scrollTop < 100) {
        setScroll(false);
      }
    };
    scrollEle.current.addEventListener("scroll", _.throttle(handleScroll, 300));
  }, []);
  return (
    <div className="horizontal-layout">
      <aside className="left-aside">
        <SideMenu />
      </aside>
      <main className="right-aside">
        <Header />
        <main className="main-content" ref={scrollEle}>
          {renderRoutes(routes, authed, authPath)}
        </main>
        <footer className="copyrights">
          <span className="colorBtn"><DynamicAntdTheme placement="top" /></span>
          Copyright@{`${new Date().getFullYear()}`}&nbsp;&nbsp;&nbsp;好玩的效果，好玩的动态
        </footer>
        <div className="utils-box">
          {isScroll && (
            <span className="top-span line-height">
              <VerticalAlignTopOutlined
                onClick={() => scrollEle.current.scrollTo(0, 0)}
                style={{ fontSize: "20px", paddingTop: 12 }}
              />
            </span>
          )}
        </div>
      </main>
    </div>
  );
}
export default inject("globalLogin")(memo(withRouter(observer(AllComponents))));
