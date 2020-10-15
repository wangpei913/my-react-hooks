import Mock from 'mockjs'

Mock.mock('/menu', {
    "code": 200,
    "message": 'OK',
    "data": [
        {
            "path": "/home",
            "title": "首页",
            "key": "1",
            "icon": "DashboardOutlined",
            "routes": [
                {
                    "title": "分析页",
                    "path": "/home/analysis",
                    "key": "1-1",
                },
                {
                    "title": "监控页",
                    "path": "/home/monitor",
                    "key": "1-2",
                },
            ],
        },
        {
            "title": "分类",
            "path": "/kind",
            "key": "2",
            "icon": "ProfileOutlined",
            "routes": [],
        },
    ]
})