import React from "react";
import { withRouter } from "react-router-dom";
import MyContainer from "../components/myContainer";

function Monitor() {
  return <div>monitor</div>;
}
export default withRouter(MyContainer(Monitor));
