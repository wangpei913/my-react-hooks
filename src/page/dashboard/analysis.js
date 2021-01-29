import React from 'react';
import { Button, Input } from 'antd'
import CardCom from './component/cardCom';

function Analysis() {
    const changeInput = (e) => {
        console.log(e.target.value, 'eeeeeeeeeeeeeeeeee')
    }
    return (
        <div>
            <Button type="primary">测试切换主题色</Button>
            <CardCom />
            <Input placeholder="请输入内容" style={{ width: 300 }} onChange={changeInput} />
        </div>
    )
}
export default Analysis;