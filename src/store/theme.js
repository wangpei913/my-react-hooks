import { observable, action } from "mobx";

class ThemeStore {
    @observable
    themeType = null;
    @action
    changeThemeType = (data) => {
        window.sessionStorage.setItem('theme', data)
        this.themeType = data;
    }
    constructor() {
        this._userThemeStorage()
    }
    async _userThemeStorage() {
        let value = await window.sessionStorage.getItem('theme') || 'light';
        this.themeType = value;
    }
}
export default ThemeStore;