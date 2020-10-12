import React from "react";
import { withRouter } from "react-router-dom";
import MyContainer from "../components/myContainer";
import Drag from "../components/drag";

function Monitor() {
  return (
    <div>
      <Drag />
    </div>
  );
}
export default withRouter(MyContainer(Monitor));
