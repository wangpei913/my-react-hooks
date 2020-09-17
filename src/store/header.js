import { observable, action } from "mobx";

class GlobalHeaderStore {
  // 是否收缩左侧菜单
  @observable
  collapsed = false;
  isProgress = true;

  @action
  toggleCollapsed = (data) => {
    this.collapsed = data;
  };
  handleProgress = (data) => {
    setTimeout(() => {
      this.isProgress = data;
    }, 3000);
  };
}

export default GlobalHeaderStore;
