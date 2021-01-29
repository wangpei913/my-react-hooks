import request from '../request/axios'
import '../mock/menu';

// mock菜单
export function getMenu(data) {
    return request({
        method: 'get',
        url: '/menu',
        params: { ...data }
    })
}

// 登录页面提示语
export function getHitokoto(data = {}) {
    return request({
        method: 'get',
        url: 'https://v1.hitokoto.cn/',
        params: { ...data }
    })
}