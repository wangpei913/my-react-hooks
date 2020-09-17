// import React, { useEffect, useCallback, useState } from "react";
import React from "react";
import { inject, observer } from "mobx-react";
// import _ from "loadsh";
import renderRoutes from "./route/index";

// import Horizontal from "./layout/horizontal";
// import Vertical from "./layout/vertical";
// import myContext from "./components/myContext";

import RouteConfig from "./route/router";
import defaultRoute from "./route/default";

const route = [...defaultRoute, ...RouteConfig];
function App(props) {
  const {
    globalLogin: { authed },
  } = props;
  const authPath = "/login";
  // const [width, setSize] = useState(
  //   document.documentElement.getBoundingClientRect().width
  // );
  // const onSize = useCallback(() => {
  //   setSize(document.documentElement.getBoundingClientRect().width);
  // }, []);
  // useEffect(() => {
  //   window.addEventListener("resize", _.debounce(onSize, 500));
  //   return () => window.removeEventListener("resize", onSize);
  // }, [onSize]);
  // return width > 1000 ? (
  //   <myContext.Provider value={width}>
  //     <Horizontal />
  //   </myContext.Provider>
  // ) : (
  //   <myContext.Provider value={width}>
  //     <Vertical />
  //   </myContext.Provider>
  // );
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {renderRoutes(route, authed, authPath)}
    </div>
  );
}
export default inject("globalLogin")(observer(App));
