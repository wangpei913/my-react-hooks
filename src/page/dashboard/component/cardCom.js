import React from 'react'
import { Row } from 'antd'
import echarts from 'echarts/lib/echarts'
import ResponsiveCol from 'components/responsiveCol'
import CardDom from 'components/cardDom'
import EchartsDom from 'components/charts'
import { formatterRMB } from '../../../utils'

function CardCom() {
    const option = {
        color: ['#09bcb7'],
        grid: {
            top: 10,
            left: 5,
            right: 5,
            bottom: 0
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                label: {
                    show: false,
                    backgroundColor: '#fff',
                    color: '#556677',
                    borderColor: 'rgba(0,0,0,0)',
                    shadowColor: 'rgba(0,0,0,0)',
                    shadowOffsetY: 0
                },
                lineStyle: {
                    width: 0
                }
            },
            backgroundColor: 'rgba(0,0,0,.5)',
            formatter: function (params) {
                let text = ''
                for (let i = 0; i < params.length; i++) {
                    text += `周${params[i].name}：销售额：${params[i].value} 万元`
                }
                return text
            }
        },
        xAxis: {
            show: false,
            type: 'category',
            boundaryGap: false,
            data: ['一', '二', '三', '四', '五', '六', '日'],
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
        },
        yAxis: {
            type: 'value',
            show: false,
            splitLine: { // 平行线
                show: false
            },
            axisTick: { // 坐标做刻度线
                show: false
            },
        },
        series: [
            {
                type: 'line',
                data: [10, 10, 30, 12, 15, 3, 7],
                symbolSize: 1,
                symbol: 'circle',
                smooth: true,
                showSymbol: false,
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(9,188,183,0.7)'
                        },
                        {
                            offset: 0.8,
                            color: 'rgba(9,188,183,0.01)'
                        }
                    ], false),
                    shadowColor: 'rgba(0,0,0,0.01)',
                    shadowBlur: 10
                }
            }
        ]
    };

    return (
        <Row gutter={[20, 20]}>
            <ResponsiveCol>
                <CardDom title={{ text: '总销售额（万元）', describe: '商品销售额' }}>
                    {{
                        main: <EchartsDom option={option} />,
                        footer: (
                            <span>
                                日销售额
                                <i className="iconfont icon-renminbi"></i>
                                {formatterRMB(1350)}
                            </span>
                        )
                    }}
                </CardDom>
            </ResponsiveCol>
            <ResponsiveCol>
                <CardDom title={{ text: '访问量（万人）', describe: '商品访问量' }}>
                    {{
                        main: <EchartsDom option={option} />,
                        footer: (
                            <span>
                                日访问量
                                {formatterRMB(1234)}
                            </span>
                        )
                    }}
                </CardDom>
            </ResponsiveCol>
            <ResponsiveCol>
                <CardDom title={{ text: '支付笔数（笔）', describe: '商品访问量' }}>
                    {{
                        main: <EchartsDom option={option} />,
                        footer: (
                            <span>
                                转化率
                                {formatterRMB(1234)}
                            </span>
                        )
                    }}
                </CardDom>
            </ResponsiveCol>
            <ResponsiveCol>
                <CardDom title={{ text: '运营活动效果', describe: '商品访问量' }}>
                    {{
                        main: <EchartsDom option={option} />,
                        footer: (
                            <span>
                                日访问量
                                {formatterRMB(1234)}
                            </span>
                        )
                    }}
                </CardDom>
            </ResponsiveCol>
        </Row>
    )
}
export default CardCom;