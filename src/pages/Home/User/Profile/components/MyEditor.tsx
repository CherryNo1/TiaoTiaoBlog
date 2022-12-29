import React, { Fragment, useMemo, useState } from "react";
import AvatarEditor, { AvatarEditorProps } from "react-avatar-editor";
import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import type {
  ArgsProps,
  NotificationPlacement,
} from "antd/es/notification/interface";
import { Button, Divider, notification, Space } from "antd";

// https://github.com/search?p=14&q=avatar&type=Repositories
const MyEditor = () => {
  const [count, setCount] = useState<number>(0);
  const imageChangeHandle = () => {
    setCount(count + 1);
    console.log(`imageChangehandle ${count}`);
  };

  const Context = React.createContext({ info: "默认值" });
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (props: ArgsProps) => {
    api.error({
      message: `${props.message}`,
      description: (
        <Context.Consumer>{({ info }) => `${info}!`}</Context.Consumer>
      ),
      placement: props.placement,
    });
  };

  return (
    <Fragment>
      <AvatarEditor
        image="https://tse3-mm.cn.bing.net/th/id/OIP-C.DDEXTcytRzNoYIuqYSk7ZAHaE-?pid=ImgDet&rs=1"
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
        onImageChange={imageChangeHandle}
        onLoadFailure={() =>
          openNotification({ message: "通知", placement: "bottomRight" })
        }
      />
      <Context.Provider value={{ info: "图片加载失败" }}>
        {contextHolder}
      </Context.Provider>
    </Fragment>
  );
};

export default MyEditor;
