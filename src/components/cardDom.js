import React from 'react'
import { Card, Tooltip } from 'antd'

function CardDom(props) {
    const { title: { text = '', describe = '' }, children: { footer = null, main = null } } = props;
    return (
        <Card className="card-dom">
            <header className="card-header">
                {text}
                <Tooltip placement="top" title={describe}>
                    <i className="iconfont icon-shuoming"></i>
                </Tooltip>
            </header>
            <main className="card-main">{main}</main>
            <footer className="card-footer">{footer}</footer>
        </Card>
    )
}
export default CardDom;