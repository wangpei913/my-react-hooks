import React, { useRef, useEffect } from 'react'
import echarts from 'echarts'

function EchartsDom({ option = {} }) {
    // 定义chart Dom
    const chartRef = useRef(null)
    // 获取echarts dom的实例
    let chartInstance = null

    const renderChart = () => {
        const renderedInstance = echarts.getInstanceByDom(chartRef.current)
        if (renderedInstance) {
            chartInstance = renderedInstance
        } else {
            chartInstance = echarts.init(chartRef.current)
        }
        chartInstance.setOption(option)
    }

    useEffect(() => {
        renderChart();
    })

    useEffect(() => {
        return () => {
            chartInstance && chartInstance.dispose()
        }
    }, [chartInstance])


    return <div style={{ width: '100%', height: '100%' }} ref={chartRef}></div>
}
export default EchartsDom