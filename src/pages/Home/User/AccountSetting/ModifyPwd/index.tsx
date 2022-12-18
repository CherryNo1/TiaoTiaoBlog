import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const ModifyPwd: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="pwdModify"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="旧密码"
                name="oldPwd"
                rules={[{ required: true, message: '旧密码为必输项!' }]}
            >
                <Input placeholder="旧密码" />
            </Form.Item>
            <Form.Item
                label="新密码"
                name="newPwd"
                rules={[
                    { required: true, message: '新密码为必输项!' },
                    {
                        message: '密码必须由字母和数字组成,长度在8-20位之间!',
                        pattern: /^(?=.*\d)(?=.*[A-z])[\da-zA-Z]{8,20}$/
                    },
                ]}
            >
                <Input.Password placeholder="新密码" />
            </Form.Item>
            <Form.Item
                label="重复新密码"
                name="reNewPwd"
                rules={[
                    ({ getFieldValue }) => {
                        return {
                            validator(rule, value) {
                                if (!value || getFieldValue('newPwd') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('新密码与确认新密码不同！');
                            },
                        }
                    },

                ]}
            >
                <Input.Password placeholder="重复新密码" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form >
    );
};

export default ModifyPwd;