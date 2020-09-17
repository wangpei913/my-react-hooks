import Loadable from "react-loadable";
import Loading from "../components/loading";

const Login = Loadable({
  loader: () => import("../page/login"),
  loading: Loading,
});

const defaultRoute = [
  {
    path: "/login",
    component: Login,
  },
];
export default defaultRoute;
