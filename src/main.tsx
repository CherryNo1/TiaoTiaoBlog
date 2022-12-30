import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <App />
  // <React.StrictMode>
  //   {/*组件形式 路由使用下面的*/
  //   {/* <BaseRouter /> */}
  //   {/* 数组对象的路由模式使用下面的,build时使用HashRouter */}
  //   <App />
  // </React.StrictMode >
)
