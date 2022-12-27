import React from "react";
import { Breadcrumb } from "antd";

export type BreadcrumbType = {
    label: string;
    key: string | number;
};
var arrayObj = new Array(4).fill(1);

const Separator = ({ hello, inx }) => {
    console.log(inx + " " + hello);
    return (
        <>
            <Breadcrumb.Separator key={inx}>asd</Breadcrumb.Separator>
        </>
    );
};
const items = [
    { label: "菜单项一", key: "item-1" }, // 菜单项务必填写 key
    { label: "菜单项二", key: "item-2" },
];
export default function BreadcrumbComp({ breadcrumbItem, indexx }) {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item menu={{ items }}>Ant Design</Breadcrumb.Item>
                {arrayObj.map((a, index) => {
                    return (
                        <>
                            <Separator hello={a} inx={index} />
                        </>
                    );
                })}
            </Breadcrumb>
        </>
    );
}
