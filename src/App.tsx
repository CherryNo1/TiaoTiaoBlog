import React, { lazy, Suspense, useEffect } from "react";
import { Breadcrumb, Button, ConfigProvider, FloatButton, theme } from "antd";
import { Outlet, useRoutes, Navigate, useNavigate } from "react-router-dom";
import { CustomerServiceOutlined, CommentOutlined } from "@ant-design/icons";
import routes from "./router";
import { isLogin } from './api/index';
const App: React.FC = () => {
  const router = useRoutes(routes);
  const pathname = location.pathname
  const navigate = useNavigate()
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
      {router}
    </React.Fragment>
  );
};
export default App;
