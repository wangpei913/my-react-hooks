import { observable, action } from "mobx";

class LoginStore {
  @observable
  authed = window.sessionStorage.getItem("authed") || false;
  username = window.sessionStorage.getItem("user") || "未登录";
  @action
  changeAuthed = ({ authed, username }) => {
    window.sessionStorage.setItem("authed", authed);
    window.sessionStorage.setItem("user", username);
    this.authed = authed;
    this.username = username;
  };
  logout = () => {
    window.sessionStorage.removeItem("authed");
    window.sessionStorage.removeItem("user");
    this.authed = false;
  };
}
export default LoginStore;
