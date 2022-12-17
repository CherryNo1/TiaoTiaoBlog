import Home from "@/pages/Home"
import { Navigate, RouteObject } from 'react-router-dom';
import Artcle from "@/pages/Home/Artcle";
import Details from "@/pages/Home/Artcle/Details";
import React, { lazy } from "react";
const User = lazy(() => import("@/pages/Home/User"))
import Login from '@/pages/Login';

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
                path: 'user',
                element: lazyRouter(<User />)
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
    }

]
export default routes