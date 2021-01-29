import React, { useState, useCallback } from 'react'
import { Input } from 'antd';
import { debounce } from 'loadsh'
function Kind() {
    const [counter, setCounter] = useState('');

    const debouncedSave = useCallback(
        debounce(nextValue => setCounter(nextValue), 1000),
        []
    )
    const changeInput = (e) => {
        debouncedSave(e.target.value)
    }
    return <>
        <Input placeholder="请输入内容" style={{ width: 300 }} onChange={(e) => changeInput(e)} />
        <div>{counter}</div>
    </>
}
export default Kind;