// import React from "react";
// import { Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../components/loading";

const AllComponent = Loadable({
  loader: () => import("../page"),
  loading: Loading,
});
const Home = Loadable({
  loader: () => import("../page/home"),
  loading: Loading,
});
const Kind = Loadable({
  loader: () => import("../page/kind"),
  loading: Loading,
  delay: 30000,
  timeout: 10000,
});
const Analysis = Loadable({
  loader: () => import("../page/analysis"),
  loading: Loading,
});
const Monitor = Loadable({
  loader: () => import("../page/monitor"),
  loading: Loading,
  delay: 300,
  timeout: 10000,
});

const RouteConfig = [
  {
    path: "/",
    component: AllComponent,
    routes: [
      // {
      //   path: "/",
      //   exact: true,
      //   render: () => <Redirect to={"/home"} />,
      // },
      {
        path: "/home",
        component: Home,
        title: "首页",
        key: "1",
        icon: "DashboardOutlined",
        requiresAuth: false,
        exact: true,
        routes: [
          // {
          //   path: "/home",
          //   exact: true,
          //   render: () => <Redirect to={"/home/analysis"} />,
          // },
          {
            title: "分析页",
            path: "/home/analysis",
            component: Analysis,
            requiresAuth: false,
            exact: true,
            key: "1-1",
          },
          {
            title: "监控页",
            path: "/home/monitor",
            component: Monitor,
            requiresAuth: false,
            key: "1-2",
          },
        ],
      },
      {
        title: "分类",
        path: "/kind",
        component: Kind,
        requiresAuth: true,
        key: "2",
        icon: "ProfileOutlined",
        routes: [],
      },
    ],
  },
];
export default RouteConfig;
