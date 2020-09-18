import Loadable from "react-loadable";
import Loading from "../components/loading";

const IndexPage = Loadable({
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
});
const Analysis = Loadable({
  loader: () => import("../page/analysis"),
  loading: Loading,
});
const Monitor = Loadable({
  loader: () => import("../page/monitor"),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import("../page/notFound"),
  loading: Loading,
});
const Login = Loadable({
  loader: () => import("../page/login"),
  loading: Loading,
});

const PageRoute = [
  {
    path: "/404",
    component: NotFound,
    requiresAuth: false,
    routes: [],
    title: "404",
  },
  {
    path: "/login",
    title: "登录页",
    component: Login,
    requiresAuth: false,
    routes: [],
  },
  {
    path: "/",
    title: "首页",
    component: IndexPage,
    requiresAuth: false,
    routes: [
      {
        exact: true,
        from: "/",
        to: "/home",
      },
      {
        path: "/404",
        redirect: "/404",
      },
      {
        path: "/home",
        component: Home,
        title: "首页",
        key: "1",
        requiresAuth: false,
        routes: [
          {
            exact: true,
            from: "/home",
            to: "/home/analysis",
          },
          {
            path: "/404",
            redirect: "/404",
          },
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
        routes: [],
      },
    ],
  },
];
export default PageRoute;
