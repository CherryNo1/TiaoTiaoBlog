import React, { useEffect, useState } from "react";
import { Anchor, Breadcrumb, Divider, Image, Layout, Menu, theme } from "antd";
import Logo from "../../Icons/Logo";
import {
  Navigate,
  Outlet,
  useLocation,
  useParams,
  useRoutes,
  useNavigate,
  useMatch,
} from "react-router-dom";
const menuData = ["Springboot", "SpringCloud", "GateWay"].map(
  (element, index) => ({
    key: index,
    label: `${element}`,
  })
);

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header>
        <div
          style={{
            float: "left",
            width: 120,
            height: 31,
            margin: "16px 24px 16px 0",
          }}
        >
          <Logo />
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={menuData}
        />
      </Header>
      <Content
        style={{ padding: "0 15vw", minHeight: "calc(100vh - 64px - 64px)" }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
          <Content style={{ padding: "0 40px" }}>
            <Outlet />
          </Content>
          <Sider
            style={{ background: colorBgContainer, display: "flex" }}
            width={"10vw"}
          >
            {/* <AnchorComp /> */}
            <NotificationOutlined />
            :))) <b>公众号:JavaJL</b>
            <Divider />
            <Image width={"9vw"} src="/src/assets/images/javaLj.png" />
          </Sider>
        </Layout>
      </Content>
      <Footer
        className="footer"
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Home;
