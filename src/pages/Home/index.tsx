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
  FloatButton,
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
import { useToken } from "@ant-design/pro-components";
import Details from "./Article/Details";
import { ArticleApi } from "@/api";
import Editorer from "./Editor";
const phone = decode("7784854978686949778481517810610361");
//原生js加密
window.btoa(unescape(encodeURIComponent("我是一段需要处理的字符")));
//原生js解密
decodeURIComponent(
  escape(window.atob("5oiR5piv5LiA5q616ZyA6KaB5aSE55CG55qE5a2X56ym"))
);

const Home: React.FC = (props) => {

  const { token } = useToken()
  const location = useLocation()
  const layout = <Layout>
    <Header className={style.header}>
      <HeaderComp />
    </Header>
    <Content className={style.content}>
      <div className={style.breadcrumb}>
        <BreadcrumbComp />
      </div>
      <Layout style={{ padding: "24px 0", background: token.colorBgContainer }}>
        <Content className={style.centerContent}>
          <Outlet />
        </Content>
        <Sider
          className={style.rightSider}
          width={"10vw"}
          style={{ background: token.colorBgContainer, display: "flex" }}
        >
          <SiderComp />
        </Sider>
      </Layout>
    </Content>
    <Footer className={style.footer}>跳跳是只猫</Footer>
  </Layout>
  return (
    <React.Fragment>
      {
        // 如果路径中含有details，就显示发表文章的页面，否则就是文章列表的页面。后期需要改
        //改成当路径为文章编辑页面时，就显示  <Details /> 组件，否则显示Layout组件
        location.pathname.match('editor') ? <Editorer /> : layout
      }
    </React.Fragment>
  );
};

export default Home;
