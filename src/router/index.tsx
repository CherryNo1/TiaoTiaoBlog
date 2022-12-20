import Home from "@/pages/Home"
import { Navigate, RouteObject } from 'react-router-dom';
import Artcle from "@/pages/Home/Artcle";
import Details from "@/pages/Home/Artcle/Details";
import React, { lazy } from "react";
const User = lazy(() => import("@/pages/Home/User"))
import Login from '@/pages/Login';
import Profile from '@/pages/Home/User/Profile/index';
import AccountSetting from "@/pages/Home/User/AccountSetting";
import { NotFount } from "@/pages/Error/404";
import ModifyPhone from "@/pages/Home/User/AccountSetting/ModifPhone";
import ModifyEmail from "@/pages/Home/User/AccountSetting/ModifyEmail";
import ModifyPwd from "@/pages/Home/User/AccountSetting/ModifyPwd";
import AccountWriteOff from "@/pages/Home/User/AccountSetting/AccountWriteOff";
import MyArtcleList from "@/pages/Home/User/MyArtcleList";
import ShowLoginHistory from "@/pages/Home/User/AccountSetting/ShowLoginHistory";

const lazyRouter = (jsxCom: JSX.Element) =>    // 路由懒加载
    <React.Suspense fallback={<h1>加载中</h1>}>
        {jsxCom}
    </React.Suspense>

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to={'/login'} />,
    },

    {
        path: '/home',
        element: <Home />,
        children: [
            {
                //个人中心
                path: 'user',
                element: lazyRouter(<User />),
                children: [
                    //内容管理
                    {
                        path: "myArtcleList",
                        element: <MyArtcleList />
                    },
                    // 个人资料
                    {
                        path: "profile",
                        element: <Profile />
                    },
                    // 账号设置
                    {
                        path: "accountSetting",
                        element: <AccountSetting />,
                        children: [
                            {
                                path: 'phone/modify/:userId',
                                element: <ModifyPhone />
                            },
                            {
                                path: 'email/modify/:userId',
                                element: <ModifyEmail />
                            },
                            {
                                path: 'pwd/modify/:userId',
                                element: <ModifyPwd />
                            },
                            {
                                path: 'account/writeOff/:userId',
                                element: <AccountWriteOff />
                            },
                            {
                                path: 'showLoginHistory/:userId',
                                element: <ShowLoginHistory />
                            },
                        ]
                    }
                ]
            },
            {
                path: 'artcle',
                element: <Artcle />,
                children: [
                    {
                        path: ':artcleId',
                        element: <Details />
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/404',
        element: <NotFount />
    },
    {
        path: '/*',
        element: <NotFount />
    },

]


export default routes