import React from 'react'
import { Tabs, Row } from 'antd';
import ResponsiveCol from 'components/responsiveCol';

const { TabPane } = Tabs;

function TabCom() {
    // const 
    return (
        <div className="tab-com">
            <Tabs defaultActiveKey="1">
                <TabPane tab="销售额" key="1">
                    <Row gutter={[20, 20]}>
                        <ResponsiveCol lg={16} xl={16}>1</ResponsiveCol>
                        <ResponsiveCol lg={8} xl={8}>1</ResponsiveCol>
                    </Row>
                </TabPane>
                <TabPane tab="访问量" key="2">
                    Tab 3
                </TabPane>
            </Tabs>
        </div>
    )
}
export default TabCom