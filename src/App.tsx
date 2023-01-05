import React, { lazy, useEffect } from "react";
import { Breadcrumb, Button, ConfigProvider, FloatButton, theme } from "antd";
import { Outlet, useLocation, useNavigate, useRoutes } from "react-router-dom";
import { CustomerServiceOutlined, CommentOutlined } from "@ant-design/icons";
import { routes } from "./router";
import isAuth from "./pages/Auth";
const App: React.FC = () => {
  const router = useRoutes(routes);
  const location = useLocation();
  const navigate = useNavigate();
  /**
   * 路由守卫，当token不存在时，就会重定位到login页面
   */
  useEffect(() => {
    console.log(location);

    // console.log('路由改变了，当前路由为，{}', location.pathname);
    if (!isAuth()) {
      navigate("/login");
    }
  }, [location]);

  return <React.Fragment>{/* {router} */}</React.Fragment>;
};
export default App;
