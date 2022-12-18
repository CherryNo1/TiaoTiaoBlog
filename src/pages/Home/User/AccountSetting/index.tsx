import React, { Fragment } from 'react'
import { Col, Drawer, Row, Table } from 'antd';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { DsType } from '@/pages/Home/menuItem'
import { useState } from 'react';
import { render } from 'react-dom';
import { useEffect } from 'react';

const dataSource: DsType[] = [
    {
        key: '1',
        item: '密码',
        tips: "存在风险，请修改密码",
        operation: '修改密码',
        operationPath: 'pwd/modify/userid'
    },
    {
        key: '2',
        item: '手机',
        tips: "155****4768",
        operation: '修改手机',
        operationPath: 'phone/modify/userid'
    },
    {
        key: '3',
        item: '邮箱',
        tips: "ts***@qq.com",
        operation: '修改邮箱',
        operationPath: 'email/modify/userid'
    },
    {
        key: '4',
        item: '微信',
        tips: "curd996",
        operation: '解绑微信',
        operationPath: 'bindWechat/userid'
    },
    {
        key: '5',
        item: 'QQ',
        tips: "496158543",
        operation: '修改QQ',
        operationPath: 'bindQQ/userid'
    },
    {
        key: '6',
        item: '登录记录',
        tips: "近一个月登陆记录",
        operation: '查看历史',
        operationPath: 'showLoginHistory/userid'
    },
    {
        key: '7',
        item: '账号注销',
        tips: "注销后不可恢复,请谨慎操作",
        operation: '账号注销',
        operationPath: 'account/writeOff/userid'
    },
];


const AccountSetting = () => {
    const navigator = useNavigate()
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const onClose = () => {
        setOpen(false);
    };
    const columns = [
        {
            title: '选项',
            dataIndex: 'item',
        },
        {
            title: '提示',
            dataIndex: 'tips',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: (index: any, data: DsType) => {
                return (
                    <a onClick={(e) => {
                        navigator(data.operationPath, { state: { "a": '123' } })
                        setTitle(data.operation)
                        setOpen(true);
                    }}>{data.operation}</a>
                )
            },

        },
    ];

    return (
        <Fragment>
            <Table dataSource={dataSource} columns={columns} pagination={false} size='large' />
            <Drawer title={title} placement="right" onClose={onClose} open={open} width={'30vw'}>
                <Outlet />
            </Drawer>
        </Fragment>
    )
}


export default AccountSetting