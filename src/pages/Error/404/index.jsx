import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export const NotFount = () => {
    return (

        <Result
            status="404"
            title="404"
            subTitle="糟糕，该页面被隐藏掉了！"
            extra={<Button type="primary" onClick={() => {
                history.go(-1)
            }}>返回</Button>}
        />
    )

}