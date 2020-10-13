import React, { useEffect, useState } from "react";
import { Tabs, Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";


import { get } from '../request'
import '../mock/prompt'

import Calendar from "../components/calendar";

const { TabPane } = Tabs;
const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 24,
  },
};
function Login(props) {
  const onFinish = (values) => {
    const { username, password } = values;
    if (username === "admin" && password === "hello~admin") {
      props.globalLogin.changeAuthed({ authed: true, username: username });
      props.history.push("/home");
    } else {
      message.warning("请输入 用户名: admin & 密码: hello~admin");
    }
  };
  // 随机数据
  const randomData = (arr) => {
    if (!arr) return
    let count = arr.length - 1;
    let random = Math.ceil(Math.random() * count);
    console.log(random, 'ooo')
    return arr[random]
  }
  // ajax请求
  const [title, setTitle] = useState('相信美好的事情即将发生');
  useEffect(() => {
    get('/prompt').then(({code, data}) => {
      if (code === 200) {
        setTitle(randomData(data))
      }
    })
  }, [])
  return (
    <div className="login-page">
      <aside className="left-aside">
        <nav className="left-nav-up">{title}</nav>
        <nav className="left-nav-down">
          <Tabs defaultActiveKey="1" size="small" className="tabs">
            <TabPane tab="账户密码登录" key="1">
              <Form
                name="basic"
                style={{ padding: "0 5px" }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  label=""
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "请输入用户名!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="用户名:admin"
                    autoComplete="off"
                  />
                </Form.Item>

                <Form.Item
                  label=""
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "请输入密码!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="密码:hello~admin"
                  />
                </Form.Item>

                <Form.Item
                  {...tailLayout}
                  name="remember"
                  valuePropName="checked"
                >
                  <Checkbox>自动登录</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </nav>
      </aside>
      <aside className="right-aside">
        <Calendar />
      </aside>
    </div>
  );
}
export default inject("globalLogin")(withRouter(observer(Login)));
