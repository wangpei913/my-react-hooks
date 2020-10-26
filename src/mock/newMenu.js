import Mock from 'mockjs'

Mock.mock('/menu', {
    code: 200,
    message: "OK",
    data: [
        {
            "title": "JavaScript",
            "path": "/javascript",
            "key": "0",
            "icon": "\ue60e",
            "routes": [
                {
                    "title": "数据类型",
                    "path": "/javascript/datatype",
                    "key": "0-1",
                    "icon": ''
                }
            ],
        },
        {
            "title": "CSS",
            "path": "/css",
            "key": "1",
            "icon": "\ue684",
            "routes": [],
        },
        {
            "title": "WebPack",
            "path": "/webpack",
            "key": "2",
            "icon": "\ue65b",
            "routes": [],
        },
        {
            "title": "Vue",
            "path": "/vue",
            "key": "3",
            "icon": "\ue69a",
            "routes": [],
        },
        {
            "title": "React",
            "path": "/react",
            "key": "4",
            "icon": "\ue64b",
            "routes": [],
        },
        {
            "title": "小程序",
            "path": "/applets",
            "key": "5",
            "icon": "\ue73f",
            "routes": [],
        },
        {
            "title": "TypeScript",
            "path": "/tsp",
            "key": "6",
            "icon": "\uecef",
            "routes": [],
        },
        {
            "title": "HTTP",
            "path": "/http",
            "key": "7",
            "icon": "\ue609",
            "routes": [],
        },
        {
            "title": "手写代码",
            "path": "/write",
            "key": "8",
            "icon": "\ue648",
            "routes": [],
        }
    ]
})