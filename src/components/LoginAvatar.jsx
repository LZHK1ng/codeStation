import React from "react";
import { useSelector, UseSelector } from "react-redux/es/hooks/useSelector";
import { Avatar, Button, List, list, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "../css/LoginAvatar.module.css";

function LoginAvatar(props) {
  let loginStatus = null;
  const { isLogin } = useSelector((state) => state.user);

  if (isLogin) {
    const content = (
      <List
        dataSource={["个人中心", "退出登录"]}
        size="large"
        renderItem={(item) => {
          return (
            <List.Item style={{ cursor: "pointer" }}> {item}</List.Item>
          );
        }}
      ></List>
    );
    loginStatus = (
      <Popover content={content} trigger="hover" placement="bottom">
        <div className={styles.avatarContainer}>
          <Avatar src="" preview="false" size="large" icon={<UserOutlined />} />
        </div>
      </Popover>
    );
  } else {
    loginStatus = (
      <Button type="primary" size="large" onClick={props.loginHandle}>
        注册/登录
      </Button>
    );
  }

  return <div>{loginStatus}</div>;
}
export default LoginAvatar;
