import { observable, action } from "mobx";

class ThemeStore {
    @observable
    themeType = 'light';
    @action
    changeThemeType = (data) => {
        this.themeType = data;
    }
}
export default ThemeStore;