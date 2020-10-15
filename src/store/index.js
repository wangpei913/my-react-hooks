import { configure } from "mobx";

import GlobalHeaderStore from "./header";
import GlobalBreadCrumb from "./breadcrumb";
import LoginStore from "./login";
import ThemeStore from './theme';

configure({ enforceActions: "never", isolateGlobalState: true });

class Store {
  constructor() {
    this.globalHeaderStore = new GlobalHeaderStore(this);
    this.globalBreadCrumb = new GlobalBreadCrumb(this);
    this.globalLogin = new LoginStore(this);
    this.globalTheme = new ThemeStore(this);
  }
}

export default new Store();
