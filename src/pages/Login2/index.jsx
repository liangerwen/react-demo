import React, { useState, useEffect, useReducer } from "react";
import { Input, Button, Form, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { params } from "./particles.config";
import { withRouter } from "react-router-dom";
import Particles from "react-particles-js";
import "./index.less";

// const initialState = { username:"",password:"", loading: false };

// // 第二个参数：state的reducer处理函数
// function reducer(state, action) {
//   switch (action.type) {
//     case "login":
//       return { ...state,loading: true };
//     case "success":
//       return { ...state,loading: false};
//     case "error":
//       return { ...state,loading: false};
//     default:
//       throw new Error();
//   }
// }

function Login(props) {
  /*******reducer*******/
  // const [state,dispatch] = useReducer(reducer,initialState);
  // const { username, password, loading } = state;
  /*********************/

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  //[]里得值代表监听该值，发生变化时就执行compontentDidMount
  useEffect(() => {
    //相当于compontentDidMount
    console.log("compontentDidMount");
    return () => {
      //相当于componentWillUnmount
      console.log("componentWillUnmount");
    };
  }, [username]);

  //React.momo包裹组件，可以防止父组件传入的值没有改变而导致子组件重新渲染，从而提高性能
  //useCallback:参数一function，参数二数组，如果参数二数组里的值发生变化才可以执行参数一function，但无论如何参数一function都就可以执行第一次
  //useReducer:传入state和action，当state复杂是使用reducer可以是代码结构更加清晰
  async function Submit() {
    const user = await form.validateFields();
    console.log(props);
    setLoading(true);
    if (user.username === "123456" && user.password === "123123")
      props.history.push("/home");
    else message.error("账号或密码错误！");
    setLoading(false);
  }

  return (
    <div id="login-body">
      <Particles params={params} />
      <div id="login-form">
        <h1 id="form-title">登陆</h1>
        <Form name="basic" form={form}>
          <Form.Item
            label=""
            name="username"
            rules={[{ required: true, message: "请输入账号!" }]}
          >
            <Input
              placeholder="请输入账号"
              className="user-input"
              prefix={<UserOutlined />}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block
              size="large"
              htmlType="submit"
              loading={loading}
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
export default withRouter(Login);
