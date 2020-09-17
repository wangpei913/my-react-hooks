import React from "react";
import { Tabs, Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

import NotSrc from "../assets/image/not.png";

const { TabPane } = Tabs;
const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 24,
  },
};
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
  return (
    <div className="login-page">
      <nav className="page-nav">相信美好的事情即将发生</nav>
      <main className="page-main">
        <aside>
          <Tabs defaultActiveKey="1" size="small">
            <TabPane tab="账户密码登录" key="1">
              <Form
                {...layout}
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
            <TabPane tab="手机号登录" key="2">
              <img src={NotSrc} alt="not" />
            </TabPane>
          </Tabs>
        </aside>
        <aside>right</aside>
      </main>
    </div>
  );
}
export default inject("globalLogin")(withRouter(observer(Login)));
