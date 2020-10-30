import Mock from 'mockjs'

Mock.mock('/menu', {
    "code": 200,
    "message": 'OK',
    "data": [
        {
            "path": "/dashboard",
            "title": "图表",
            "key": "0",
            "icon": "\ue61b",
            "routes": [
                {
                    "title": "分析页",
                    "path": "/dashboard/analysis",
                    "key": "0-1",
                },
                {
                    "title": "监控页",
                    "path": "/dashboard/monitor",
                    "key": "0-2",
                },
            ],
        },
        {
            "title": "分类",
            "path": "/kind",
            "key": "1",
            "icon": "\ue601",
            "routes": [],
        },
    ]
})