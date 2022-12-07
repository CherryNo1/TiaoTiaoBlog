import React from 'react'
import { Breadcrumb } from 'antd';

export type BreadcrumbType = {
    label: string,
    key: (string | number)
}

const items = [
    { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
    { label: '菜单项二', key: 'item-2' },
];
export default function BreadcrumbComp({ breadcrumbItem }) {
    console.log('====================================');
    items.forEach(it => {
        console.log(it);
    })
    console.log('==================22==================');
    breadcrumbItem.forEach(it => {
        console.log(it);
    })
    console.log('====================================');

    return (
        <Breadcrumb>
            <Breadcrumb.Item menu={{ breadcrumbItem }}>Ant Design</Breadcrumb.Item>
        </Breadcrumb>
    )
}
