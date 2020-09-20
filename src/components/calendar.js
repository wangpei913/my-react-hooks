import React, { useState, useEffect } from "react";
import moment from "moment";

let data = [];
// 获取当前月份的天数
let monthDays = moment().daysInMonth();
// 获取当前月份的第一天的星期 不是星期一的话就补上天数
let fristWeeksDay = moment().startOf("month").weekday();
if (fristWeeksDay > 1) {
  for (let i = 0; i < fristWeeksDay - 1; i++) {
    let addDays = moment()
      .subtract(1, "months")
      .endOf("months")
      .add(-i, "days")
      .format("DD");
    let newArr = [];
    newArr.push({
      lable: "before",
      value: addDays,
    });
    data = [...newArr.reverse(), ...data];
  }
}
for (let i = 1; i < monthDays + 1; i++) {
  data.push({
    lable: "now",
    value: i,
  });
}
// 获取当前月份的最后一天是周几,缺少天数就补上天数
let endWeeksDay = moment().endOf("months").weekday();
// 定义需要补的天数
let addNum = 7 - endWeeksDay;
for (let i = 0; i < addNum; i++) {
  let day = moment()
    .subtract(-1, "months")
    .startOf("months")
    .add(i, "days")
    .format("D");
  data.push({
    lable: "after",
    value: day,
  });
}

function Calendar() {
  let nowDay = moment().format("D");
  const [nowClick, setClick] = useState("");
  const handleEvent = (item) => {
    if (item.lable === "now") {
      setClick(item.value);
    }
  };
  const [nowTime, setTime] = useState(moment().format("YYYY-MM-DD hh:mm:ss"));
  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("YYYY-MM-DD hh:mm:ss"));
    }, 1000);
    return () => {};
  }, []);
  return (
    <div className="calendar-view">
      <nav className="view-nav">{nowTime}</nav>
      <header className="view-header">
        {["一", "二", "三", "四", "五", "六", "日"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </header>
      <section className="view-section">
        {data.map((item, index) => {
          return (
            <span
              key={index}
              className={`day-span ${
                parseInt(nowDay) === item.value ? "now-span" : ""
              }`}
              style={{
                color: item.lable !== "now" ? "#bbb" : "#333",
                border: nowClick === item.value ? "3px #ddd solid" : "",
              }}
              onClick={() => handleEvent(item)}
            >
              {item.value}
            </span>
          );
        })}
      </section>
    </div>
  );
}
export default Calendar;
