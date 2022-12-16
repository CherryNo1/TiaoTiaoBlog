import React from "react";
import { Breadcrumb, Button, ConfigProvider, FloatButton, theme } from "antd";
import {
  Navigate,
  Route,
  Router,
  RouterProvider,
  Routes,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/Home/index";
import { NotFount } from "./pages/404";
import User from "./pages/Home/User";
import Login from "@/pages/Login";
import Artcle from "./pages/Home/Artcle/index";
import { CustomerServiceOutlined, CommentOutlined } from "@ant-design/icons";
import Details from "./pages/Home/Artcle/Details";
// import routes from "./config/routes";
const App: React.FC = () => {
  // const element = useRoutes(routes);
  return (
    <ConfigProvider
      theme={{
        token: {
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
      {/* {element} */}
      {/* <Routes>
        {routes.map((x, y) => {
          return <Route path={x.path} element={x.element} key={y}></Route>;
        })}
      </Routes> */}
      <Routes>
        <Route path="/" element={<Navigate to={`/login`}></Navigate>}></Route>
        <Route path="/home" element={<Home />}>
          <Route path="user" element={<User />}></Route>
          <Route path="artcle" element={<Artcle />}>
            <Route path=":artcleId" element={<Details />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFount />} />
      </Routes>
    </ConfigProvider>
  );
};
export default App;
