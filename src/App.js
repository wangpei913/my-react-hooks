import React from "react";
import { inject, observer } from "mobx-react";
import renderRoutes from "./route";
import PageRoute from "./route/pageRoute";
function App() {
  const authed = false;
  const authPath = "/login";
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {renderRoutes(PageRoute, authed, authPath)}
    </div>
  );
}
export default inject("globalLogin")(observer(App));
