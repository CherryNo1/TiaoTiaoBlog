import React, { useEffect, useState } from "react";
import { Anchor, Breadcrumb, Layout, Menu, theme } from "antd";
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
import "./index.scss";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import AnchorComp from "../../components/AnchorComp";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const menuData = ["Springboot", "SpringCloud", "GateWay"].map(
  (element, index) => ({
    key: index,
    label: `${element}`,
  })
);

const App: React.FC = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('user')
  // }, [])
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="layout">
      <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
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
        className="site-layout"
        style={{ padding: "0 20vw", display: "flex" }}
      >
        <hr />
        <Layout>
          <Sider
            style={{ background: colorBgContainer }}
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <AnchorComp />
          </Sider>
          <Layout className="site-layout">
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <Content style={{ margin: "0 16px", height: "100vh" }}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
