import { get } from '../request'
import '../mock/newMenu';

export function getMenu(data) {
    return get('/menu', data)
}