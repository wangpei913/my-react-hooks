import React from "react";

import renderRoutes from "../route/index";
import RouteConfig from "../route/router";
import defaultRoute from "../route/default";
const route = [...RouteConfig, ...defaultRoute];

function Horizontal() {
  const authed = true;
  const authPath = "/login";
  return (
    <div className="horizontal-layout">
      {/* <aside className="left-aside">
        <SideMenu />
      </aside>
      <main className="right-aside">
        <Header />
        <main className="main-content">
          {renderRoutes(route, authed, authPath)}
        </main>
      </main> */}
      {renderRoutes(route, authed, authPath)}
    </div>
  );
}

export default Horizontal;
