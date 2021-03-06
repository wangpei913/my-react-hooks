import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { message } from 'antd'
import { CSSTransition } from 'react-transition-group'
import '../assets/style/router.scss';

const renderRoutes = (
  routes,
  authed = false,
  authPath = "/login",
  extraProps = {},
  switchProps = {}
) => {
  // 格式化路由数组
  let routerDatepath = routes.filter((item) => {
    return item.component;
  });
  //筛选重定向
  let defualtRouter = routes.filter((item) => {
    return item.exact && !item.component;
  });
  //重定向
  let defualtRedirect = defualtRouter.map((item, i) => {
    return (
      <Redirect
        key={i}
        exact={item.exact}
        from={item.from}
        to={item.to}
      ></Redirect>
    );
  });

  // 404重定向
  let notFoundRouter = routes.filter((item) => item.redirect);
  let notFoundRedirect = notFoundRouter.map((item, i) => {
    return <Redirect key={i} to={item.path}></Redirect>;
  });
  return (
    <Switch {...switchProps}>
      {routerDatepath &&
        routerDatepath
          .map((route, i) => {
            return (
              <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                render={(props) => {
                  if (
                    !route.requiresAuth ||
                    authed ||
                    route.path === authPath
                  ) {
                    return (
                      <CSSTransition
                        in={true}
                        classNames="card"
                        timeout={400}
                        unmountOnExit
                        appear={true}
                      >
                        <route.component
                          beforeEnter={route.beforeEnter}
                          {...props}
                          {...extraProps}
                          route={route}
                        />
                      </CSSTransition>
                    );
                  }
                  message.error('你还没登录!')
                  return (
                    < Redirect
                      to={{
                        pathname: authPath,
                        state: { from: props.location },
                      }}
                    />
                  );
                }}
              />
            );
          })
          .concat(defualtRedirect)
          .concat(notFoundRedirect)}
    </Switch>
  );
};

export default renderRoutes;
