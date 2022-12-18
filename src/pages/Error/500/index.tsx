import React from 'react';
import { Button, Result } from 'antd';

const Error500: React.FC = () => (
    <Result
        status="500"
        title="500"
        subTitle="糟糕，服务器出错了，请联系管理员处理！"
        extra={<Button type="primary" onClick={() => {
            history.go(-1)
        }}>返回</Button>}
    />
);

export default Error500;