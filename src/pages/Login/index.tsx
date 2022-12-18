import React from "react";
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Image,
  Input,
  Row,
  theme,
} from "antd";
import "./index.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { service } from "../../utils/request";
import { ResponseData } from "@/typings";
import { useEffect } from "react";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    service({
      url: "/api/auth/login",
      data: values,
      method: "POST",
    }).then((res: ResponseData) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      navigate("/home", { state: "alien" });
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("校验错误");
    console.log(errorInfo);
  };

  return (
    <div className="login_box">
      <Row>
        <Col span={6} offset={16}>
          <div className="login_form">
            <Form
              name="basic"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="box"
            >
              <Form.Item wrapperCol={{ offset: 1 }}>
                <h1>登录</h1>
              </Form.Item>

              <Form.Item
                label="账号"
                name="phoneNumber"
                rules={[{ required: true, message: "请输入账号！" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: "请输入密码！" }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="验证码"
                name="check_code"
                rules={[{ required: true, message: "请输入验证码！" }]}
              >
                <div className="check_code">
                  <Input className="input" />
                  <Image
                    style={{ borderRadius: "5px" }}
                    preview={false}
                    src="/src/assets/images/1.png"
                  />
                </div>
              </Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 5 }}
              >
                <div>
                  {" "}
                  <Checkbox>记住我</Checkbox>
                </div>
              </Form.Item>
              <Form.Item
                name="tip"
                valuePropName="checked"
                wrapperCol={{ offset: 5 }}
                rules={[{ required: true, message: "请理解并勾选此选项！" }]}
              >
                <div>
                  {" "}
                  <Checkbox>请注意，没有注册过的账号将会被自动注册</Checkbox>
                </div>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 6 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  style={{ marginBottom: 50, width: "70%" }}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
