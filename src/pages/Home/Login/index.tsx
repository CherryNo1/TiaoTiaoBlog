import React from 'react';
import { Button, Checkbox, Col, Divider, Form, Image, Input, Row, theme } from 'antd';
import './index.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { service } from '../../../utils/request';

const Login: React.FC = () => {
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        service({
            url: '/api/auth/login',
            data: values,
            method: 'POST'
        }).then((res) => {
            console.log(res);
            localStorage.setItem("Token", res)
            if (res.status == 200) {
                navigate('/home', { state: 'alien' })
            }
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('校验错误');
        console.log(errorInfo);
    };

    return (
        <React.Fragment>
            <Row >
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
                            className='box'
                        >
                            <Form.Item wrapperCol={{ offset: 1 }}>
                                <h1>登录</h1>
                            </Form.Item>

                            <Form.Item
                                label="账号"
                                name="phoneNumber"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="密码"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                label="验证码"
                                name="check_code"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <div className="check_code">
                                    <Input className='input' />
                                    <Image style={{ "borderRadius": "5px" }}
                                        preview={false}
                                        src="/src/assets/images/1.png"
                                    />
                                </div>
                            </Form.Item>
                            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 5 }}>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 6 }}>
                                <Button type="primary" htmlType="submit" style={{ marginBottom: 50, width: '70%' }}>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                </Col>
            </Row>
        </React.Fragment>

    );
};

export default Login;