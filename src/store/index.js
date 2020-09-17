import { configure } from "mobx";

import GlobalHeaderStore from "./header";
import GlobalBreadCrumb from "./breadcrumb";
import LoginStore from "./login";

configure({ enforceActions: "never", isolateGlobalState: true });

class Store {
  constructor() {
    this.globalHeaderStore = new GlobalHeaderStore(this);
    this.globalBreadCrumb = new GlobalBreadCrumb(this);
    this.globalLogin = new LoginStore(this);
  }
}

export default new Store();
