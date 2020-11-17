import React from 'react';

/**
 * 格式化人民币
 */
export function formatterRMB(rmb) {
    if (!rmb) return false
    return rmb.toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
}

/**
 * 节流
 */
export function useDebounce(fn, delay) {
    const { current } = React.useRef({});
    function f(...args) {
        if (current.timer) {
            clearTimeout(current.timer);
        }
        current.timer = setTimeout(fn.bind(undefined, ...args), delay);
    }
    return f;
}

/**
 * 防抖
 */
export function useThrottle(fn, delay) {
    const { current } = React.useRef({});
    function f(...args) {
        if (!current.timer) {
            current.timer = setTimeout(() => {
                delete current.timer;
            }, delay);
            fn(...args);
        }
    }
    return f;
}