import React from 'react';
import { inject, observer } from "mobx-react";

function Center(props) {
    const { globalTheme: { themeType, changeThemeType } } = props
    const changeTheme = (e) => {
        changeThemeType(e.target.value)
    }
    return (
        <div className="center-page">
            <h3>用户个人中心配置页</h3>
            <div className="padding-span">
                <h4>整体风格背景</h4>
                <span>
                    <input type="radio" name="theme" checked={themeType === 'light'} value="light" onChange={changeTheme} />白色
                </span>
                <span>
                    <input type="radio" name="theme" checked={themeType === 'dark'} value="dark" onChange={changeTheme} />黑色
                </span>
            </div>
        </div>
    )
}
export default inject('globalTheme')(observer(Center));