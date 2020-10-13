import React, { memo } from "react";
import renderRoutes from "../route";
import { withRouter } from "react-router-dom";

function Home(props) {
  const {
    // globalLogin: { authed },
    route: { routes },
  } = props;
  const authPath = "/login";
  const authed = false;
  // {renderRoutes(routes, authed, authPath)}
  return <div>我是首页</div>;
}
export default memo(withRouter(Home));
