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
  Outlet,
  useNavigate,
  Link,
} from "react-router-dom";
import {
  BarChartOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  NotificationOutlined,
  UserOutlined,
  RiseOutlined
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
import { Input, Space } from "antd";
import { render } from "react-dom";
import { MenuItem } from "./menuItem";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);
//菜单Item类型

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[],): MenuItem {
  return { key, icon, children, label, } as MenuItem;
}

const items: MenuItem[] = [
  getItem('文章列表', '/home/artcle', <BarChartOutlined />),
  getItem('Springboot', '1', <PieChartOutlined />),
  getItem('SpringCloud', '2', <DesktopOutlined />),
  getItem('前端', '前端父目录', <UserOutlined />, [
    getItem('React', '3'),
    getItem('Vue', '4'),
    getItem('Angular', '5'),
  ]),
  getItem('后端', '后端父目录', <RiseOutlined />, [
    getItem('Java', '6'),
    getItem('数据库', '7'),
    getItem('Docker', '8'),
  ]),
  getItem('归档', '9', <FileOutlined />),
];


const Home: React.FC = (props) => {
  var navigator = useNavigate();
  const toLogin = () => {
    navigator("/login");
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const menuClickHandle = (menu: MenuItem) => {
    navigator(`${menu?.key}`, { replace: true })
    console.log(`点击了导航栏并跳转到${menu?.key}`);
  }
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
              items={items}
              onClick={menuClickHandle}
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
            <Divider />
            <Row gutter={20} >
              <Col> <Link to={'artcle'} >
                <Button type="primary">
                  文章列表
                </Button>
              </Link>
              </Col>
              <Col>  <Link to={'user'} > <Button type="primary">
                用户中心
              </Button></Link></Col>
            </Row>

          </Sider>
        </Layout>
      </Content >
      <Footer
        className="footer"
        style={{
          textAlign: "center",
        }}
      >
        跳跳是只猫
      </Footer>
    </Layout >
  );
};

export default Home;
