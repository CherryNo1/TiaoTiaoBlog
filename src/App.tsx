import React from "react";
import { Button, ConfigProvider, theme } from "antd";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import { NotFount } from "./pages/404";
import User from "./pages/Home/User";
import Login from "./pages/Home/Login";
const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#1677FF",
      },
      components: {

        Radio: {
          colorPrimary: '#00b96b',
        },
        Checkbox: {
          colorPrimary: '#9E339F'
        },
        Button: {
          // borderRadius: 20
        },

      },
      // algorithm: theme.darkAlgorithm,
      // algorithm: theme.defaultAlgorithm,
    }}
  >
    <Routes>
      <Route path="/" element={<Navigate to={`/login`}></Navigate>}></Route>
      <Route path="/home" element={<Home />}>
        <Route path="user" element={<User />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/*" element={<NotFount />} />
    </Routes>
  </ConfigProvider>
);

export default App;
