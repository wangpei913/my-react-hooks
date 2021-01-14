import { observable, action } from "mobx";

class GlobalBreadCrumb {
  @observable
  pathList = [{ title: '首页', path: '/' }];
  @action
  setPathList = (data) => {
    this.pathList = data;
  }
}

export default GlobalBreadCrumb;
