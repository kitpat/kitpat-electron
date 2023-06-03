import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import Home from 'renderer/views/Home/Home';
import Login from "renderer/views/Login";

export interface RouteConfig {
    path: string;
    element: React.ReactNode;
    auth: boolean; // 是否需要鉴权
    children?: RouteConfig[]; // 子路由
    redirect?: string
}

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />
    },
    // 最后都没有匹配到则回到首页
    {
        path: "*",
        element: <Navigate to="/" />
    },
]
export default routes;
