import React, { useEffect } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Logo from '../../Icons/Logo';
import { Navigate, Outlet, useLocation, useParams, useRoutes, useNavigate, useMatch } from 'react-router-dom';
import './index.scss'
import BreadcrumbComp, { BreadcrumbType } from '../../components/BreadcrumbComp/BreadcrumbComp';
const { Header, Content, Footer } = Layout;
const menuData = ['Springboot', 'SpringCloud', 'GateWay'].map((element, index) => ({
  key: index,
  label: `${element}`,
}))
const App: React.FC = () => {
  const location = useLocation()
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    // console.log(location);
    // console.log(params);
    navigate('user')
  }, [])
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className='layout'>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <div
          style={{
            float: 'left',
            width: 120,
            height: 31,
            margin: '16px 24px 16px 0',
          }}
        >
          <Logo />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={menuData}
        />
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px' }}>

        <Breadcrumb style={{ margin: '16px 0' }} >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Outlet />
        <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;