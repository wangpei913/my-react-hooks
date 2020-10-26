// js数据类型
import React from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';

function DataType() {
    let columns = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '30%',
            editable: true,
            onCell: (record) => {
                console.log(record, 're')
            }
        },
        {
            title: 'age',
            dataIndex: 'age',
            editable: true,
        },
        {
            title: 'address',
            dataIndex: 'address',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) =>
                dataSource.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                        <a>Delete</a>
                    </Popconfirm>
                ) : null,
        },
    ];
    const dataSource = [
        {
            key: '0',
            name: 'Edward King 0',
            age: '32',
            address: 'London, Park Lane no. 0',
        },
        {
            key: '1',
            name: 'Edward King 1',
            age: '32',
            address: 'London, Park Lane no. 1',
        },
    ]
    columns = columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: record => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                // handleSave: this.handleSave,
            }),
        };
    });
    return (
        <div className="full-size">
            <Table
                //   components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columns}
            />
        </div>
    )
}
export default DataType;