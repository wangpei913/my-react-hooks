import { get } from '../request'
import '../mock/menu';

// mock菜单
export function getMenu(data) {
    return get('/menu', data)
}

// 登录页面提示语
export function getHitokoto() {
    return get('https://v1.hitokoto.cn/')
}