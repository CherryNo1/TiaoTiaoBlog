import React, { useEffect, useState } from "react";
import {
  Anchor,
  Breadcrumb,
  Button,
  Col,
  Divider,
  Image,
  Layout,
  Menu,
  Row,
  theme,
} from "antd";
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
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
import { Input, Space } from "antd";
import { render } from "react-dom";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);
const Home: React.FC = () => {
  var navigator = useNavigate();
  const toLogin = () => {
    navigator("/login");
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header>
        <Row>
          <Col span={3}>
            <Logo />
          </Col>
          <Col span={12}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={[
                "Springboot",
                "SpringCloud",
                "GateWay",
                "SpringCloud",
                "GateWay",
              ].map((element, index) => {
                const key = index + 1;
                return {
                  key,
                  label: `${element}`,
                };
              })}
            />
          </Col>
          <Col offset={1} span={3}>
            <Search
              style={{ margin: "15px", textAlign: "center" }}
              size="large"
              placeholder="Search Anything"
              onSearch={() => {
                onSearch("2");
              }}
              enterButton
            />
          </Col>
          <Col offset={3} span={2}>
            <Button size="large" onClick={toLogin}>
              登录/注册
            </Button>
          </Col>
        </Row>
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
            <NotificationOutlined />:<b>公众号:Java精灵</b>
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
        跳跳是只猫
      </Footer>
    </Layout>
  );
};

export default Home;
