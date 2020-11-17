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
        let index = d.getDay() - 1;
        return index
    }
    let firstDay = getWeek(1)
    // 创建日期之前先要补充日期前后的差值
    const insertEle = (num, type) => {
        // 创建添加天数的集合
        let data = []
        if (type === 'prev') {
            // 找到传入值的星期的index
            let weekIndex = num >= 0 ? num : 6
            // 获取上个月的天数
            let prevMonth = monthDay(year, month - 1);
            // 找到向前推的天数
            let forwardDay = (parseInt(prevMonth) - parseInt(weekIndex)) + 1
            for (let i = forwardDay; i <= prevMonth; i++) {
                data.push({
                    key: `prev${i}`,
                    value: i
                })
            }
        } else {
            for (let i = 1; i < num; i++) {
                data.push({
                    key: `next${i}`,
                    value: i
                })
            }
        }
        return data
    }
    dayList = [...insertEle(firstDay, 'prev'), ...dayList]
    // 创建当月的天数dom
    for (let i = 1; i < Days + 1; i++) {
        dayList.push({ key: `value${i}`, value: i })
    }

    // 得出最后一天的星期数
    let endDays = 7 - getWeek(Days)
    // 合并候补的几天日期
    dayList = [...dayList, ...insertEle(endDays, 'next')];

    // 当前active的日期
    let activeDay = date.getDate();

    return (
        <div className="date-box">
            <header className="current">{`${year}年${month > 9 ? month : '0' + month}月${activeDay > 9 ? activeDay : '0' + activeDay}日`}</header>
            <ul className="weeks-day">
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li>六</li>
                <li>日</li>
            </ul>
            <ul className="date-days">
                {dayList.map(item => {
                    return (
                        <li
                            key={item.key}
                            value={item.value}
                            style={{ color: item.key.indexOf('value') !== -1 ? '#fff' : '#ccc' }}
                            className={item.key.indexOf('value') !== -1 && item.value === activeDay ? 'active' : ''}>
                            {item.value}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default memo(NewDate);