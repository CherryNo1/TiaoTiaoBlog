import { Divider, Empty, Image, QRCode } from 'antd'
import React from 'react'
import { NotificationOutlined } from "@ant-design/icons";

export default function SiderComp() {
    return (
        <div>
            {/* <AnchorComp /> */}
            <NotificationOutlined />:<b>公众号:Java精灵</b>
            <Divider />
            <Image width={"9vw"} src="/src/assets/images/javaLj.png" />
            <Divider />
            <Empty />
            <Divider />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            culpa ducimus sed corporis laudantium sunt mollitia vero, ab
            numquam ratione dolores eligendi fugiat alias minima blanditiis
            in! Distinctio, sapiente dignissimos!
            <Divider />
            <QRCode value="https://ant.design/" />
        </div>
    )
}
