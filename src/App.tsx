import React, { lazy, useEffect, useState } from "react";
import { Breadcrumb, Button, ConfigProvider, FloatButton, theme } from "antd";
import { Outlet, useLocation, useNavigate, useRoutes } from "react-router-dom";
import { CustomerServiceOutlined, CommentOutlined } from "@ant-design/icons";
import { routes } from "./router";
import isAuth from "./pages/Auth";
import { store } from '@/redux'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";

const App: React.FC = () => {
  const router = useRoutes(routes);
  const location = useLocation();
  const navigate = useNavigate();

  /**
   * 下面是react-redux的hooks使用redux
   */
  const select = useSelector(() => { })
  const dispathch = useDispatch()
  const [reduxVar, setReduxVar] = useState<number>()
  const plusRedux = () => {
    //+2
    store.dispatch({ type: "increment", data: 2 })
  }
  const reduceRedux = () => {
    //-3
    store.dispatch({ type: "decrement", data: 3 })
  }
  store.subscribe(() => {
    setReduxVar(store.getState())
  })


  /**
   * 路由守卫，当token不存在时，就会重定位到login页面
   */
  useEffect(() => {
    setReduxVar(store.getState())
    // console.log('路由改变了，当前路由为，{}', location.pathname);
    if (!isAuth()) {
      navigate("/login");
    }
  }, [location]);

  return <React.Fragment>
    <div>
      <div><Button onClick={plusRedux}>plus</Button>|<Button onClick={reduceRedux}>reduce</Button></div>
      <div>{reduxVar} </div>
    </div>
    <Outlet />
    {router}
  </React.Fragment>;
};
export default App;
