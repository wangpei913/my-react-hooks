/**
 * 格式化人民币
 */
export function formatterRMB(rmb) {
    if (!rmb) return false
    return rmb.toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
}