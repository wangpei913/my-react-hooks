import React from "react";
import { withRouter } from "react-router-dom";
// import Breadcrumb from "../components/breadCrumb";
import MyContainer from "../components/myContainer";

function Kind(props) {
  // const onMatchedRoutes = (matchedRoutes) => {
  //   return [
  //     {
  //       route: {
  //         path: "/",
  //         title: "首页",
  //       },
  //     },
  //     ...matchedRoutes,
  //   ];
  // };
  return (
    <div>
      {/* <Breadcrumb
        locationPath={props.location.pathname}
        onMatchedRoutes={onMatchedRoutes}
      /> */}
      我是分类页面
    </div>
  );
}
export default withRouter(MyContainer(Kind));
