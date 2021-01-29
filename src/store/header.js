import { observable, action } from "mobx";
import { getMenu } from '../api';

class GlobalHeaderStore {
  // 是否收缩左侧菜单
  @observable
  collapsed = false;
  isProgress = true;
  menus = []
  @action
  toggleCollapsed = (data) => {
    this.collapsed = data;
  };
  handleProgress = (data) => {
    setTimeout(() => {
      this.isProgress = data;
    }, 3000);
  };
  getMenus = () => {
    getMenu().then(res => {
      this.menus = res.data;
    })
  };
}

export default GlobalHeaderStore;
