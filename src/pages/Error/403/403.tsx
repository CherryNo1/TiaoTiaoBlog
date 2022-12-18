import React from 'react';
import { Button, Result } from 'antd';

const Error403: React.FC = () => (
    <Result
        status="403"
        title="403"
        subTitle="对不起，你目前暂无权限访问此页面！"
        extra={<Button type="primary" onClick={() => {
            history.go(-1)
        }}>返回</Button>}
    />
);

export default Error403;