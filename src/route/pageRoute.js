import Loadable from "react-loadable";
import Loading from "../components/loading";

const IndexPage = Loadable({
  loader: () => import("../page"),
  loading: Loading,
});
const JavaScrypt = Loadable({
  loader: () => import("../page/js"),
  loading: Loading,
})
const CSS = Loadable({
  loader: () => import("../page/css"),
  loading: Loading,
})
const Vue = Loadable({
  loader: () => import("../page/vue"),
  loading: Loading,
})
const React = Loadable({
  loader: () => import("../page/react"),
  loading: Loading,
})
const WebPack = Loadable({
  loader: () => import("../page/webpack"),
  loading: Loading,
})
const Applets = Loadable({
  loader: () => import("../page/xcx"),
  loading: Loading,
})
const TypeScript = Loadable({
  loader: () => import("../page/ts"),
  loading: Loading,
})
const HTTP = Loadable({
  loader: () => import("../page/http"),
  loading: Loading,
})
const WriteCode = Loadable({
  loader: () => import("../page/code"),
  loading: Loading,
})

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
        to: "/javascript",
      },
      {
        path: "/404",
        redirect: "/404",
      },
      {
        title: "JavaScrypt",
        path: "/javascript",
        component: JavaScrypt,
        requiresAuth: false,
        key: "0",
      },
      {
        title: "CSS",
        path: "/css",
        component: CSS,
        requiresAuth: true,
        key: "1",
      },
      {
        title: "WebPack",
        path: "/webpack",
        component: WebPack,
        requiresAuth: true,
        key: "2",
      },
      {
        title: "Vue",
        path: "/vue",
        component: Vue,
        requiresAuth: true,
        key: "3",
      },
      {
        title: "React",
        path: "/react",
        component: React,
        requiresAuth: true,
        key: "4",
      },
      {
        title: "小程序",
        path: "/applets",
        component: Applets,
        requiresAuth: true,
        key: "5",
      },
      {
        title: "TypeScript",
        path: "/tsp",
        component: TypeScript,
        requiresAuth: true,
        key: "6",
      },
      {
        title: "HTTP",
        path: "/http",
        component: HTTP,
        requiresAuth: true,
        key: "7",
      },
      {
        title: "手写代码",
        path: "/write",
        component: WriteCode,
        requiresAuth: true,
        key: "8",
      },
      {
        title: "个人中心",
        path: "/center",
        component: UserCenter,
        requiresAuth: true,
        key: "3",
      },
    ],
  },
];
export default PageRoute;
