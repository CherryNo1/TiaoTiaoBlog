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

//原生js
// decodeURIComponent(
//   escape(window.atob("5oiR5piv5LiA5q616ZyA6KaB5aSE55CG55qE5a2X56ym"))
// );


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
        {/*  style={{ padding: "0 15vw", minHeight: "calc(100vh - 64px - 64px)" }} */}
        <div className="breadcrumb" style={{ margin: "16px 0" }}>
          <BreadcrumbComp />
        </div>
        <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
          <Content style={{ padding: "0 40px" }}>
            <Outlet />
          </Content>
          <Sider
            style={{ background: colorBgContainer, display: "flex" }}
            width={"10vw"}
          >
            <SiderComp />
          </Sider>
        </Layout>
      </Content>
      <Footer
        className="footer"
        style={{
          backgroundColor: "rgb(121,115,0)",
          textAlign: "center",
        }}
      >
        跳跳是只猫
      </Footer>
    </Layout>
  );
};

export default Home;
