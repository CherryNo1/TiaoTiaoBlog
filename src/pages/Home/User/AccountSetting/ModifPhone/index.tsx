import React, { Fragment, useRef } from 'react'
import { Form } from 'antd';
import { Input } from 'antd';
import { Space } from 'antd';
import { Button } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
export default function ModifyPhone() {

    let timer: any//验证码定时器
    const [second, setSecond] = useState(30) //倒计时秒数
    const [btnDisabled, setBtnDisabled] = useState(false) //按钮是否可点击，false可点击

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    // 初始化时清除定时器
    useEffect(() => {
        clearInterval(timer)
        return () => clearInterval(timer)
    }, [])

    // 监听秒数的变动
    useEffect(() => {
        if (second > 0 && second < 30) {
            console.log(second);

        } else {
            // 定时器超过时间后，可以重新发送验证码
            clearInterval(timer)
            // 可点击
            setBtnDisabled(false)
            setSecond(30)
        }
    }, [second])

    // 发送验证码，开启倒计时
    const sendCode = () => {
        // 倒计时递减
        timer = setInterval(() => setSecond((pre) => pre - 1), 1000)
        // 不可点击
        setBtnDisabled(true)
    }

    return (
        <Fragment>
            <Form
                name="phoneModify"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="手机号"
                    name="phoneNumber"
                    rules={[{ required: true, message: '手机号不可为空!' }]}
                >
                    <Input placeholder="手机号" />
                </Form.Item>
                <Form.Item
                    label="验证码"
                    name="verificationCode"
                    rules={[{ required: true, message: '验证码不可为空!' }]}
                >

                    <Space direction="horizontal">
                        <Input
                            placeholder="验证码"
                        />
                        <Button disabled={btnDisabled} onClick={sendCode}>
                            {!btnDisabled ? '获取验证码' : `${second}s后重发`}
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Fragment >
    )
}
