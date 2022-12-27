import React, { useEffect, useMemo, useState } from "react";
import {
  Breadcrumb,
  Button,
  Col,
  Divider,
  Image,
  Layout,
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

const { Search } = Input;

const Home: React.FC = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();
  console.log("location", location);

  return (
    <Layout>
      <Header>
        <HeaderComp />
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
            <Divider />
            <Row gutter={20}>
              <Col>
                {" "}
                <Link to={"artcle"}>
                  <Button type="primary">文章列表</Button>
                </Link>
              </Col>
              <Col>
                {" "}
                <Link to={"user"}>
                  {" "}
                  <Button type="primary">用户中心</Button>
                </Link>
              </Col>
            </Row>
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
