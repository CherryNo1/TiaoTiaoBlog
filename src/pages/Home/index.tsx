import React, { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Breadcrumb,
  Button,
  QRCode,
  Calendar,
  Col,
  Divider,
  Empty,
  Image,
  Layout,
  Rate,
  Row,
  theme,
} from "antd";
import {
  Outlet,
  Link,
  useLocation,
  useMatch,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { NotificationOutlined } from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
import { Input, Space } from "antd";
import HeaderComp from "@/components/HeaderComp";
import BreadcrumbComp from "./components/BreadcrumbComp";
import style from "./index.module.scss";
// import { decode, encode } from "js-base64";
import SiderComp from "./components/SiderComp";
// const phone = decode("bWFxaTUxNDc2OG5nYm8xNTU0MQ==");

import { decode } from "js-base64";
const phone = decode("7784854978686949778481517810610361");
//原生js加密
window.btoa(unescape(encodeURIComponent("我是一段需要处理的字符")));
//原生js解密
decodeURIComponent(
  escape(window.atob("5oiR5piv5LiA5q616ZyA6KaB5aSE55CG55qE5a2X56ym"))
);
console.log(phone);

const Home: React.FC = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header>
        <HeaderComp />
      </Header>
      <Content className={style.content}>
        <div className={style.breadcrumb}>
          <BreadcrumbComp />
        </div>
        <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
          <Content className={style.centerContent}>
            <Outlet />
          </Content>
          <Sider
            className={style.rightSider}
            width={"10vw"}
            style={{ background: colorBgContainer, display: "flex" }}
          >
            <SiderComp />
          </Sider>
        </Layout>
      </Content>
      <Footer className={style.footer}>跳跳是只猫</Footer>
    </Layout>
  );
};

export default Home;
