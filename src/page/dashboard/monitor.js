import React from 'react'
import { Table } from 'antd';


function Monitor() {

    const data = [
        {
            key: '1',
            class: 'EPS',
            name: '张三',
            teacher: '郝老师',
            chinese: '89',
            mathematics: '89',
        },
        {
            key: '2',
            class: 'EPS',
            name: '王五',
            teacher: '郝老师',
            chinese: '89',
            mathematics: '89',
        },
        {
            key: '3',
            class: 'EPS',
            name: '李四',
            teacher: '张老师',
            chinese: '89',
            mathematics: '89',
        },
        {
            key: '4',
            class: 'EPS',
            name: '小敏',
            teacher: '张老师',
            chinese: '89',
            mathematics: '89',
        },
        {
            key: '5',
            class: 'EPS',
            name: '小米',
            teacher: '郝老师',
            chinese: '89',
            mathematics: '89',
        },
        {
            key: '6',
            class: '哈哈',
            name: '小7',
            teacher: '朱老师',
            chinese: '89',
            mathematics: '89',
        },
    ]

    const columns = [
        {
            title: '预测项目',
            dataIndex: 'class',
            key: 'class',
            colSpan: 2,
            width: 200,
            align: 'center',
            render: (text, record, index) => {
                const obj = {
                    children: text !== null ? text : '',
                    props: {}
                }
                obj.props.rowSpan = mergeCells(text, data, 'class', index)
                return obj
            },
        },
        {
            title: "",
            dataIndex: 'name',
            key: 'name',
            colSpan: 0,
            render: (value) => {
                return {
                    children: value
                }
            }
        },
        {
            title: '2018A',
            dataIndex: 'teacher',
            key: 'teacher',
            render: (text, record, index) => {
                const obj = {
                    children: text !== null ? text : '',
                    props: {}
                }
                // obj.props.rowSpan = mergeCells(text, data, record.key, index)

                return obj
            },
        },
        {
            title: '2019E',
            dataIndex: 'chinese',
            key: 'chinese',
        },
        {
            title: '2020E',
            dataIndex: 'mathematics',
            key: 'mathematics',
        },
    ];


    const mergeCells = (text, data, key, index) => {
        // 上一行该列数据是否一样
        if (index !== 0 && text === data[index - 1][key]) {
            return 0
        }
        let rowSpan = 1
        // 判断下一行是否相等
        for (let i = index + 1; i < data.length; i++) {
            if (text !== data[i][key]) {
                break
            }
            rowSpan++
        }
        console.log(rowSpan, 'rrrr')
        return rowSpan
    }
    console.log(columns, 'ccc')
    return <div>
        <Table columns={columns} dataSource={data} bordered />
    </div>
}
export default Monitor;