import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { SiderItemsDataType } from "@/pages/Home/menuItem";
import { Outlet, useNavigate } from "react-router-dom";
import style from './index.module.scss'
const { Header, Content, Footer, Sider } = Layout;
const siderItemsData: SiderItemsDataType[] = [
  { label: "账号设置", path: "accountSetting", icon: UserOutlined },
  { label: "个人资料", path: "profile", icon: VideoCameraOutlined },
  { label: "内容管理", path: "myArticleList", icon: UploadOutlined },
];
const siderItems = siderItemsData.map((siderItem, index) => ({
  key: siderItem.path,
  icon: React.createElement(siderItem.icon),
  label: siderItem.label,
}));

const User: React.FC = () => {
  const navigate = useNavigate();
  const siderMenuchange = (e: any) => {
    navigate(e.key);
  };
  return (
    <Layout>
      <Sider className={style.sider}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["accountSetting"]}
          items={siderItems}
          onClick={siderMenuchange}
        />
      </Sider>
      <Content className={style.centent} >
        <Outlet />
      </Content>
    </Layout>
  );
};

export default User;
