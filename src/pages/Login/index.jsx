import React, { Component } from "react";
import { Input, Button, Form, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { params } from "./particles.config";
import { withRouter } from "react-router-dom";
import Particles from "react-particles-js";
import "./index.less";

class Login extends Component {
  state = { user: { username: "", password: "" } };
  formRef = React.createRef();
  changeUsername = (e) => {
    this.setState({
      user: { username: e.target.value, password: this.state.user.password },
    });
  };

  changePassword = (e) => {
    this.setState({
      user: { username: this.state.user.username, password: e.target.value },
    });
  };
  Submit = async () => {
    try {
      const user = await this.formRef.current.validateFields();
      console.log(this.props);
      if (user.username === "123456" && user.password === "123123")
        this.props.history.push("/home");
      else message.error("账号或密码错误！");
    } catch {}
  };
  render() {
    const { changeUsername, changePassword, Submit } = this;

    return (
      <div id="login-body">
        <Particles params={params} />
        <div id="login-form">
          <h1 id="form-title">登陆</h1>
          <Form name="basic" ref={this.formRef}>
            <Form.Item
              label=""
              name="username"
              rules={[{ required: true, message: "请输入账号!" }]}
            >
              <Input
                placeholder="请输入账号"
                className="user-input"
                prefix={<UserOutlined />}
                onChange={changeUsername}
                size="large"
              ></Input>
            </Form.Item>

            <Form.Item
              label=""
              name="password"
              rules={[{ required: true, message: "请输入密码!" }]}
            >
              <Input.Password
                placeholder="请输入密码"
                className="user-input"
                prefix={<LockOutlined />}
                onChange={changePassword}
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                block
                size="large"
                htmlType="submit"
                onClick={Submit}
              >
                登陆
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
