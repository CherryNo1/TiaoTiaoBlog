import React from "react";
import { Button, ConfigProvider, theme } from "antd";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { NotFount } from "./pages/404";
import User from "./pages/Home/User";
import Login from "./pages/Home/Login";
const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#00b96b",
      },
      // algorithm: theme.darkAlgorithm,
    }}
  >
    <Routes>
      <Route path="/" element={<Navigate to={`/home`}></Navigate>}></Route>
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
