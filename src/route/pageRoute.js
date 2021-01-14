import Loadable from "react-loadable";
import Loading from "../components/loading";

const IndexPage = Loadable({
  loader: () => import("../page"),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import("../page/dashboard"),
  loading: Loading,
});
const Analysis = Loadable({
  loader: () => import("../page/dashboard/analysis"),
  loading: Loading,
});
const Monitor = Loadable({
  loader: () => import("../page/dashboard/monitor"),
  loading: Loading,
});
const Kind = Loadable({
  loader: () => import("../page/kind"),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import("../page/notfound"),
  loading: Loading,
});
const Login = Loadable({
  loader: () => import("../page/login"),
  loading: Loading,
});
// 个人中心页
const UserCenter = Loadable({
  loader: () => import("../page/center"),
  loading: Loading,
});

const PageRoute = [
  {
    path: "/404",
    component: NotFound,
    requiresAuth: false,
    routes: [],
    title: "404",
    parentId: -1
  },
  {
    path: "/login",
    title: "登录页",
    component: Login,
    requiresAuth: false,
    routes: [],
    parentId: 0
  },
  {
    path: "/",
    title: "Dashboard",
    component: IndexPage,
    requiresAuth: false,
    parentId: 1,
    routes: [
      {
        exact: true,
        from: "/",
        to: "/dashboard",
      },
      {
        path: "/404",
        redirect: "/404",
      },
      {
        title: "Dashboard",
        path: "/dashboard",
        component: Dashboard,
        requiresAuth: false,
        parentId: 1.1,
        key: "0",
        routes: [
          {
            exact: true,
            from: "/dashboard",
            to: "/dashboard/analysis",
          },
          {
            path: "/404",
            redirect: "/404",
          },
          {
            title: "分析页",
            path: "/dashboard/analysis",
            component: Analysis,
            requiresAuth: false,
            key: "0-1",
          },
          {
            title: "监控页",
            path: "/dashboard/monitor",
            component: Monitor,
            requiresAuth: false,
            key: "0-2",
          }
        ]
      },
      {
        title: "Kind",
        path: "/kind",
        component: Kind,
        requiresAuth: true,
        key: "1",
        parentId: 1.2,
      },
      {
        title: "个人中心",
        path: "/center",
        component: UserCenter,
        requiresAuth: true,
        key: "3",
        parentId: 1.4,
      },
    ],
  },
];
export default PageRoute;
