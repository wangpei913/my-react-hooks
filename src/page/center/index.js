import React from 'react';
import { inject, observer } from "mobx-react";
import { Radio, Row, Col } from 'antd';
import { useThrottle } from 'utils';
function Center(props) {
    const { globalTheme: { themeType, changeThemeType } } = props
    const changeTheme = useThrottle((e) => {
        changeThemeType(e.target.value)
    }, 500)
    return (
        <div className="center-page">
            <h3 className="p-10-b">用户个人中心配置页</h3>
            <Row gutter={[20, 20]} >
                <Col span={24}>
                    <label className="item-label">主题色</label>
                    <Radio.Group value={themeType} onChange={changeTheme}>
                        <Radio value="light">白色</Radio>
                        <Radio value="dark">黑色</Radio>
                    </Radio.Group>
                </Col>
            </Row>
        </div>
    )
}
export default inject('globalTheme')(observer(Center));