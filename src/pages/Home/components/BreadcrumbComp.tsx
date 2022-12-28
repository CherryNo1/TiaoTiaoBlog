import { Alert, Breadcrumb } from "antd";
import React, { FC, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

const breadcrumbNameMap: Record<string, string> = {
  "/home": "首页",
  "/home/user": "个人中心",
  "/home/article": "文章列表",
  "/home/article/details": "文章详情",
  "/home/article/details/:id": "文章详情2",
  "/home/article/springboot": "springboot",
  "/home/user/profile": "个人资料",
  "/home/user/myArticleList": "内容管理",
  "/home/article/springCloud": "springCloud",
};
export default function BreadcrumbComp() {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((path, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key={"home"}></Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  useEffect(() => {}, []);
  return <Breadcrumb separator=">">{breadcrumbItems}</Breadcrumb>;
}
