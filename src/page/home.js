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
  return <div>{renderRoutes(routes, authed, authPath)}</div>;
}
export default memo(withRouter(Home));
