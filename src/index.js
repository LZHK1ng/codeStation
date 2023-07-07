import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'antd/dist/antd.min.js'
import zhCN from 'antd/es/locale/zh_CN' // 中文语言包
import { ConfigProvider } from 'antd'

import { BrowserRouter } from 'react-router-dom'
// 引入仓库
import store from './redux/store';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
