import React from "react";
import { inject, observer } from "mobx-react";

import styled from "styled-components";

import renderRoutes from "./route";
import PageRoute from "./route/pageRoute";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => (props.theme === "light" ? "#fff" : "rgb(31, 31, 31)")};
`;

function App(props) {
  const { globalTheme: { themeType } } = props;
  console.log(themeType, 'the')
  const authed = false;
  const authPath = "/login";
  return (
    <AppContainer className={`theme-${themeType}`} theme={themeType}>
      {renderRoutes(PageRoute, authed, authPath)}
    </AppContainer>
  );
}
export default inject("globalLogin", "globalTheme")(observer(App));
