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
import "./index.module.scss";

import base64 from "js-base64";
const phone = base64.decode("7784854978686949778481517810610361");
//原生js
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
      <Content
        style={{ padding: "0 15vw", minHeight: "calc(100vh - 64px - 64px)" }}
      >
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
            <div>
              {/* <AnchorComp /> */}
              <NotificationOutlined />:<b>公众号:Java精灵</b>
              <Divider />
              <Image width={"9vw"} src="/src/assets/images/javaLj.png" />
              <Divider />
              <Empty />
              <Divider />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              culpa ducimus sed corporis laudantium sunt mollitia vero, ab
              numquam ratione dolores eligendi fugiat alias minima blanditiis
              in! Distinctio, sapiente dignissimos!
              <Divider />
              <QRCode value="https://ant.design/" />
            </div>
          </Sider>
        </Layout>
      </Content>
      <Footer
        className="footer"
        style={{
          backgroundColor: "rgb(121,255,0)",
          textAlign: "center",
        }}
      >
        跳跳是只猫
      </Footer>
    </Layout>
  );
};

export default Home;
