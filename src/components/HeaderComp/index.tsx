import React, { useEffect, useMemo, useState } from "react";
import {
  Anchor,
  Avatar,
  Breadcrumb,
  Button,
  Col,
  Divider,
  Dropdown,
  Image,
  Layout,
  Menu,
  message,
  Row,
  theme,
  MenuProps,
  Popover,
  Badge,
} from "antd";
import Logo from "../../Icons/Logo";
import {
  Outlet,
  useNavigate,
  Link,
  useLocation,
  useOutlet,
  useResolvedPath,
  resolvePath,
  NavLink,
} from "react-router-dom";
import {
  BarChartOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  NotificationOutlined,
  UserOutlined,
  RiseOutlined,
  DownOutlined,
  AntDesignOutlined,
  CodepenOutlined,
} from "@ant-design/icons";

import { Input, Space } from "antd";
import isAuth from "@/pages/Auth/index";
import { MenuItem } from "@/typings";
import {
  ItemType,
  MenuItemType,
  SubMenuType,
  MenuItemGroupType,
  MenuDividerType,
} from "antd/es/menu/hooks/useItems";
import { getItem } from "@/utils/commonUtils";
import { User } from "@/api";

const { Search } = Input;
//菜单类型

const onSearch = (value: string) => console.log(value);

const items: MenuItem[] = [
  getItem("文章列表", "/home/article", <BarChartOutlined />),
  getItem("Springboot", "/home/article/springboot", <PieChartOutlined />),
  getItem("SpringCloud", "/home/article/springCloud", <DesktopOutlined />),
  getItem("前端", "前端父目录", <UserOutlined />, [
    getItem("React", "/home/article/front/react"),
    getItem("Vue", "/home/article/front/vue"),
    getItem("Angular", "/home/article/front/angular"),
  ]),
  getItem("后端", "后端父目录", <RiseOutlined />, [
    getItem("Java", "/home/article/back/java"),
    getItem("数据库", "/home/article/back/db"),
    getItem("Docker", "/home/article/back/docker"),
  ]),
  getItem("归档", "/archived", <FileOutlined />),
];

const HeaderComp: React.FC = (props) => {
  var navigator = useNavigate();

  /**
   * 事实上指定任意一种类型都可以渲染
   * 因为ItemType类型时他们的组合
   * export type ItemType = MenuItemType | SubMenuType | MenuItemGroupType | MenuDividerType | null;
   */
  const avatarMenuItem:
    | MenuItemType[]
    | MenuItemType[]
    | SubMenuType[]
    | MenuItemGroupType[]
    | MenuDividerType[]
    | null = [
      {
        //key配置成路径后，方便在MenuProps对象中使用onClick事件统一使用编程式路由
        key: "/home/user",
        danger: true,
        title: "个人中心",
        icon: <PieChartOutlined />,
        label: "个人中心",
        onClick: (data) => {
          // data.keyPath就是key属性
          // navigator(`${data.keyPath}`)
        },
      },
      {
        key: "/home/editor",
        danger: true,
        title: "发表博客title",
        icon: <PieChartOutlined />,
        label: "发表博客",
      },
      {
        key: "/home/user/pwd/modify/userid",
        danger: true,
        title: "马青波title",
        icon: <PieChartOutlined />,
        label: "修改密码",
      },
      {
        key: "/logout",
        danger: true,
        title: "退出登录",
        icon: <PieChartOutlined />,
        label: "退出登录",
      },
    ];

  const avatarMenu: MenuProps = {
    onClick: (data) => {
      // data.keyPath就是MenuProps.item的key属性，参考avatarMenuItem的第一个栗子，这里是统一做了路由。路由路径为item配置的key
      if (data.key == '/logout') {
        User.logout()
          .then(() => {
            navigator(`/login`);
            localStorage.removeItem('Authorization');
          })
      } else {
        navigator(`${data.keyPath}`);
      }
    },
    defaultActiveFirst: true,
    items: avatarMenuItem,
  };

  // const outlet = useOutlet();
  // console.log(outlet);
  // const resolvePath = useResolvedPath("/func/id=21");
  // console.log(resolvePath);

  const menuClickHandle = (menu: MenuItem) => {
    navigator(`${menu?.key}`, { replace: true });
    console.log(`点击了导航栏并跳转到${menu?.key}`);
  };
  const loginTips = () => (
    <div className="loginTips">
      <div className="login-guide-list">
        <Row gutter={20}>
          <Col span={12}>
            <Space>
              <AntDesignOutlined />
              <span>免费试学课程</span>
            </Space>
          </Col>
          <Col span={12}>
            <Space>
              <CodepenOutlined />
              <span>收藏有用文章</span>
            </Space>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Space>
              <AntDesignOutlined />
              <span>查阅浏览足迹</span>
            </Space>
          </Col>
          <Col span={12}>
            <Space>
              <CodepenOutlined />
              <span>订阅优质专栏</span>
            </Space>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Space>
              <AntDesignOutlined />
              <span>体验签到抽奖</span>
            </Space>
          </Col>
          <Col span={12}>
            <Space>
              <CodepenOutlined />
              <span>提升成长等级</span>
            </Space>
          </Col>
        </Row>
      </div>

      <div style={{ margin: "10px" }}>
        <Button
          type="primary"
          onClick={() => {
            navigator("/login");
          }}
          style={{ width: "-webkit-fill-available" }}
        >
          立即登录
        </Button>
      </div>
      <div style={{ textAlign: "center" }}>
        首次使用？<NavLink to={"#"}>点我注册</NavLink>
      </div>
    </div>
  );
  const notificationAvatarMenu: MenuProps = {
    onClick: (data) => {
      // data.keyPath就是MenuProps.item的key属性，参考avatarMenuItem的第一个栗子，这里是统一做了路由。路由路径为item配置的key
    },
    defaultActiveFirst: true,
    items: [
      {
        //key配置成路径后，方便在MenuProps对象中使用onClick事件统一使用编程式路由
        key: "/home/notification/comment",
        title: "评论title",
        icon: <PieChartOutlined />,
        label: "评论",
        onClick: (data) => {
          // data.keyPath就是key属性
          navigator(`${data.keyPath}`);
        },
        onMouseEnter: () => {
          console.log(222);
        },
      },
      {
        key: "/home//notification/",
        title: "点赞title",
        icon: <PieChartOutlined />,
        label: "点赞",
      },
      {
        key: "/home/user/pwd/modify/userid",
        title: "关注title",
        icon: <PieChartOutlined />,
        label: "关注",
      },
      {
        key: "/logout",
        title: "私信title",
        icon: <PieChartOutlined />,
        label: "私信",
      },
      {
        key: "/systemMsg",
        title: "系统消息title",
        icon: <PieChartOutlined />,
        label: "系统消息",
      },
    ],
  };
  return (
    <Row>
      <Col span={3}>
        <div
          className="logo"
          style={{ margin: "10px" }}
          onClick={() => {
            navigator("/home");
          }}
        >
          <Logo />
        </div>
      </Col>
      <Col span={12}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["/home/article"]}
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
        {isAuth() ? (
          <React.Fragment>
            <Space size={"large"}>
              <Badge count={999}>
                <Dropdown
                  menu={notificationAvatarMenu}
                  arrow={true}
                  placement={"bottomRight"}
                >
                  <Link to="#">
                    <Avatar icon={<NotificationOutlined />} size="large" />
                  </Link>
                </Dropdown>
              </Badge>
              <Dropdown menu={avatarMenu} arrow={true}>
                <a onClick={(e) => e.preventDefault()}>
                  <Avatar
                    src="https://ts1.cn.mm.bing.net/th/id/R-C.8672512c922151b7d4f7cde3f763cb3f?rik=Jm6vIGG8XWGfwA&riu=http%3a%2f%2fhimg2.huanqiu.com%2fattachment2010%2f2018%2f1214%2f20181214031141628.jpg&ehk=4z2Ge8CMPLIj%2bAuz1H5X7h4brWDqyU4sIZjfUKQqQgM%3d&risl=&pid=ImgRaw&r=0"
                    size="large"
                  />
                </a>
              </Dropdown>
            </Space>
          </React.Fragment>
        ) : (
          <Popover
            content={loginTips}
            placement="bottom"
            title="登录跳跳后可立即获得以下权益："
          >
            <Button
              size="large"
              onClick={() => {
                navigator("/login");
              }}
            >
              登录/注册
            </Button>
          </Popover>
        )}
      </Col>
    </Row>
  );
};

export default HeaderComp;
