import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { SiderItemsDataType } from '@/pages/Home/menuItem'
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const siderItemsData: SiderItemsDataType[] = [
    { "label": "账号设置", path: "accountSetting", "icon": UserOutlined },
    { "label": "个人资料", path: "profile", "icon": VideoCameraOutlined },
    { "label": "内容管理", path: "myArtcleList", "icon": UploadOutlined },
]
const siderItems = siderItemsData.map(
    (siderItem, index) => ({
        key: siderItem.path,
        icon: React.createElement(siderItem.icon),
        label: siderItem.label,
    }),
)

const User: React.FC = () => {
    const navigate = useNavigate()
    const siderMenuchange = (e: any) => {
        navigate(e.key)
    }
    return (
        <Layout>
            <Sider style={{ 'background': '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["accountSetting"]}
                    items={siderItems}
                    onClick={siderMenuchange}
                />
            </Sider>
            <Content style={{ margin: '24px 16px' }}>
                <Outlet />
            </Content>
        </Layout>
    );
};

export default User;