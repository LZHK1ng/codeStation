import React from "react";
import "../css/App.css";
import { Input, Select, Button } from 'antd';
import { NavLink } from "react-router-dom";

const { Search, Group } = Input;

function NavHeader(props) {
  return (
    <div className="header-container">
      {/* logo */}
      <div className="logoContainer">
        <div className="logo"></div>
      </div>
      {/* 导航 */}
      <nav className="navContainer">
        <NavLink to="/" className="navgation">
          问答
        </NavLink>
        <NavLink to="/books" className="navgation">
          书籍
        </NavLink>
        <NavLink to="/interviews" className="navgation">
          面试题
        </NavLink>
        <a
          href="https://duyi.ke.qq.com/"
          className="navgation"
          target="_blank"
          rel="noreferrer"
        >
          视频教程
        </a>
      </nav>
      {/* 搜索 */}
      <div className="searchContainer">
        <Group compact>
          <Select defaultValue="issue" size="large" width={{width: "20%"}}>
            <Select.Option value="issue">问答</Select.Option>
            <Select.Option value="book">书籍</Select.Option>
          </Select>
          <Search
          placeholder="请输入要搜索的内容"
          allowClear
          enterButton='搜素'
          size="large"
          style={{width: "80%"}}
        ></Search>
        </Group>
      </div>
      {/* 登录 */}
      <div className="loginBtnContainer">
        <Button type="primary" size="large">注册/登录</Button>
      </div>
    </div>
  );
}

export default NavHeader;
