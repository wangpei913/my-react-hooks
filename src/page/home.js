import React, { memo } from "react";
import { withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
// import Breadcrumb from "../components/breadCrumb";

function Home(props) {
  // const onMatchedRoutes = (matchedRoutes) => {
  //   return [...matchedRoutes];
  // };
  return (
    <React.Fragment>
      {/* <Breadcrumb
        locationPath={props.location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      /> */}
      {renderRoutes(props.route.routes)}
    </React.Fragment>
  );
}
export default memo(withRouter(Home));
