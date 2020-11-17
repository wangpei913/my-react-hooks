import React from 'react'
import { Col } from 'antd'

function ResponsiveCol(props) {
    const { lg = 6, xl = 6 } = props
    return <Col {...props} xs={24} sm={24} md={24} lg={lg} xl={xl}>{props.children}</Col>
}
export default ResponsiveCol