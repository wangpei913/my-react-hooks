import React, { memo } from "react";
import { withRouter } from "react-router-dom";
import MyContainer from "../components/myContainer";
function Analysis() {
  return <div>我是分析页面</div>;
}
export default memo(withRouter(MyContainer(Analysis)));
