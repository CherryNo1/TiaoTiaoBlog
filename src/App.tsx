import React, { lazy, Suspense, useEffect } from "react";
import { Breadcrumb, Button, ConfigProvider, FloatButton, theme } from "antd";
import { Outlet, useRoutes, Navigate, useNavigate, RouterProvider, createBrowserRouter, useOutlet } from "react-router-dom";
import { CustomerServiceOutlined, CommentOutlined } from "@ant-design/icons";
import routers from './router/index';

const App: React.FC = () => {

  return (
    <React.Fragment>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: "#fffff",
            colorPrimary: "#1677FF",
          },
          components: {
            Radio: {
              colorPrimary: "#00b96b",
            },
            Checkbox: {
              colorPrimary: "#9E339F",
            },
            Button: {
              borderRadius: 20,
            },
          },
          // algorithm: theme.darkAlgorithm,
          // algorithm: theme.defaultAlgorithm,
        }}
      >
        <FloatButton.Group
          icon={<CustomerServiceOutlined />}
          type="primary"
          trigger="click"
        >
          <FloatButton />
          <FloatButton icon={<CommentOutlined />} />
        </FloatButton.Group>
      </ConfigProvider>
      {/* {router} */}
      <RouterProvider router={routers} fallbackElement={<>error</>}></RouterProvider>
    </React.Fragment>
  );
};
export default App;
