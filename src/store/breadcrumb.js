import { observable, action } from "mobx";

class GlobalBreadCrumb {
  @observable
  params = {
    locationPath: "",
    onMatchedRoutes: () => {},
  };
  @action
  setParams = (data) => {
    this.params = { ...data };
  };
}

export default GlobalBreadCrumb;
