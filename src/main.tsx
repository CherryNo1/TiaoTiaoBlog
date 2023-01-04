import './index.scss';
import 'antd/dist/reset.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter, Router, RouterProvider } from 'react-router-dom';
import { browserRouter } from './router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(


  /**
   * 方式1，如果使用方式一，那么App不需要被包裹BrowserRouter包裹，实际上在路由router.ts中已经被包裹了
   * 
   * 暂时不用这个，因为还不会用这个配置路由守卫
   * 用下面的这个路由方式的话，就不能在App中使用hooks
   * 如果想用这个，将下面的放在App组件。并且 main.js中删去<BrowserRouter>，只留一个<App>标签
   */
  <RouterProvider
    router={browserRouter}
    fallbackElement={<h1>error</h1>}
  ></RouterProvider>


  /**
   * 第二种方式，常用，比第一种容易理解
   */
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>

  // <React.StrictMode>
  //   {/*组件形式 路由使用下面的*/}
  //   {/* <BaseRouter /> */}
  //   {/* 数组对象的路由模式使用下面的,build时使用HashRouter */}
  //   <App />
  // </React.StrictMode >

)
