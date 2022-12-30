import React, { lazy, useState, useEffect } from "react";
import { Breadcrumb, Button, ConfigProvider, FloatButton, theme } from "antd";
import { Outlet, RouterProvider } from "react-router-dom";
import { CustomerServiceOutlined, CommentOutlined } from "@ant-design/icons";
import { router } from "./router/index";
import { useToken } from "@ant-design/pro-components";
import Modal from "antd/es/modal/Modal";

const App: React.FC = () => {
  // useEffect(() => {
  //   console.log(openFloatButton);
  // }, [openFloatButton]);
  const { token } = useToken()

  return (
    <React.Fragment>
      <ConfigProvider
        theme={{
          // algorithm: theme.darkAlgorithm,
          // algorithm: theme.compactAlgorithm,
          token: {
            colorBgContainer: "#00b96b",
          },
          components: {
            Radio: {
              colorPrimary: "#00b96b",
            },
            Checkbox: {
              colorPrimary: "#9E339F",
            },
            Button: {
              colorPrimary: "#00d1b2 ",
              // "linear-gradient(141deg,#009e6c 0,#00d1b2 71%,#00e7eb 100%)",
              borderRadius: 20,
            },
          },
        }}
      >
        <FloatButton.Group
          icon={<CustomerServiceOutlined />}
          type="primary"
          trigger="hover"
          tooltip={
            <>
              <Button>shape</Button>
            </>
          }
        >
          <FloatButton
            icon={<CommentOutlined />}
            onClick={() => {
              alert("别反馈，没人管");
            }}
          />
          <FloatButton
            onClick={() => {
              alert("这个也一样，没人管");
            }}
          />
        </FloatButton.Group>
      </ConfigProvider>
      {/* {router} */}
      <RouterProvider
        router={router}
        fallbackElement={<h1>error</h1>}
      ></RouterProvider>
    </React.Fragment>
  );
};
export default App;
