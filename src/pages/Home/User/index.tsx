import { Button, Checkbox, Radio } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import BreadcrumbComp, { BreadcrumbType } from '../../../components/BreadcrumbComp/BreadcrumbComp';

const items = [
    { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
    { label: '菜单项二', key: 'item-2' },
];
export default function User() {
    return (
        <div>
            <BreadcrumbComp breadcrumbItem={items} />
            USER
            <NavLink to={'/home'}>
                <Button>Go Home</Button>
            </NavLink>
        </div>
    )
}
