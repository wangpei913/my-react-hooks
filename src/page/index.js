import React, { memo } from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import renderRoutes from "../route/index";

import SideMenu from "../components/sideMenu";
import Header from "../components/header";

function AllComponents(props) {
  const {
    globalLogin: { authed },
    route: { routes },
  } = props;
  const authPath = "/login";
  return (
    <div className="horizontal-layout">
      <aside className="left-aside">
        <SideMenu />
      </aside>
      <main className="right-aside">
        <Header />
        <main className="main-content">
          {renderRoutes(routes, authed, authPath)}
        </main>
      </main>
    </div>
  );
}
export default inject("globalLogin")(memo(withRouter(observer(AllComponents))));
