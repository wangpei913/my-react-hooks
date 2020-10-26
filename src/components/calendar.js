import React, { memo } from 'react'

function NewDate() {
    // 当前日期
    const date = new Date();
    // 当前年
    const year = date.getFullYear();
    // 当前月份
    const month = date.getMonth() + 1;
    // 创建日期的集合
    let dayList = []
    // 通过月份得出当前月有多少天
    const monthDay = (year, month) => {
        return new Date(year, month, 0).getDate()
    }
    let Days = monthDay(year, month)
    // 获取第一天和最后一天的星期
    const getWeek = (days) => {
        let d = new Date();
        d = new Date(d.setDate(days))
        let index = d.getDay() - 1
        // let weeks = ['一', '二', '三', '四', '五', '六', '日']
        return index
    }
    let firstDay = getWeek(1)
    // 创建日期之前先要补充日期前后的差值
    const insertEle = (num, type) => {
        let data = []
        for (let i = 0; i < num; i++) {
            type === 'push' ? data.push({ key: `empty${i}`, value: '' }) : data.unshift({ key: `empty${i}`, value: '' })
        }
        return data
    }
    dayList = [...insertEle(firstDay, 'unshift'), ...dayList]
    // 创建当月的天数dom
    for (let i = 1; i < Days + 1; i++) {
        dayList.push({ key: `value${i}`, value: i })
    }
    // 当前active的日期
    let activeDay = date.getDate();

    // 元素点击事件
    const handleEle = (e) => {
        e = e || window.event;
        let tar = e.target || e.srcElement;
        console.log(tar.value)
    }

    return (
        <div className="date-box">
            <header className="current">{`${year}年${month > 9 ? month : '0' + month}月`}</header>
            <ul className="weeks-day">
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li>六</li>
                <li>日</li>
            </ul>
            <ul className="date-days" onClick={handleEle}>
                {dayList.map(item => {
                    return <li key={item.key} value={item.value} className={item.value === activeDay ? 'active' : ''}>{item.value}</li>
                })}
            </ul>
        </div>
    )
}
export default memo(NewDate);