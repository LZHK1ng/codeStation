import React, { useRef, useState } from "react";
import { Form, Modal, Radio, Input, Row, Col, Checkbox, Button } from "antd";

import styles from "../css/LoginForm.module.css";

export default function LoginForm(props) {
  const loginFormRef = useRef();
  const registerFormRef = useRef();

  const [value, setValue] = useState(1);
  const [captcha, setCaptcha] = useState(null);

  // 登录表单状态数据
  const [loginInfo, setLoginInfo] = useState({
    loginId: "",
    loginPwd: "",
    captcha: "",
    remember: false,
  });

  // 注册数据
  const [registerInfo, setRegisterInfo] = useState({
    loginId: "",
    nickname: "",
    captcha: "",
  });

  const handleOk = () => {};

  const onChange = (val) => {
    setValue(val.target.value);
  };

  const loginHandle = () => {};

  const registerHandle = () => {};

  const captchaClickHandle = () => {};

  const resetHandle = () => {};

  /**
   *
   * @param {*} oldInfo 之前整体状态
   * @param {*} newContent 用户输入新内容
   * @param {*} key 对应key
   * @param {*} setInfo 修改状态值的函数
   */
  const updateInfo = (oldInfo, newContent, key, setInfo) => {
    console.log(key, newContent);
    const obj = { ...oldInfo };
    obj[key] = newContent;
    setInfo(obj);
  };

  let container = null;

  if (value === 1) {
    // 登录面板
    container = (
      <div className={styles.container}>
        <Form>
          <Form.Item
            label="登录账号"
            name="loginId"
            rules={[{ required: true, message: "请输入账号" }]}
          >
            <Input
              placeholder="请输入你的登录账号"
              value={loginInfo.loginId}
              onChange={(e) =>
                updateInfo(loginInfo, e.target.value, "loginId", setLoginInfo)
              }
            ></Input>
          </Form.Item>
          <Form.Item
            label="登录密码"
            name="loginPwd"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password
              placeholder="请输入你的登录密码，新用户默认为123456"
              value={loginInfo.loginPwd}
              onChange={(e) =>
                updateInfo(loginInfo, e.target.value, "loginPwd", setLoginInfo)
              }
            ></Input.Password>
          </Form.Item>
          <Form.Item
            name="logincaptcha"
            label="验证码"
            rules={[
              {
                required: true,
                message: "请输入验证码",
              },
            ]}
          >
            <Row align="middle">
              <Col span={16}>
                <Input
                  placeholder="请输入验证码"
                  value={loginInfo.captcha}
                  onChange={(e) =>
                    updateInfo(
                      loginInfo,
                      e.target.value,
                      "captcha",
                      setLoginInfo
                    )
                  }
                />
              </Col>
              <Col span={6}>
                <div
                  className={styles.captchaImg}
                  onClick={captchaClickHandle}
                  dangerouslySetInnerHTML={{ __html: captcha }}
                ></div>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item
            name="remember"
            wrapperCol={{
              offset: 5,
              span: 16,
            }}
          >
            <Checkbox
              onChange={(e) =>
                updateInfo(
                  loginInfo,
                  e.target.checked,
                  "remember",
                  setLoginInfo
                )
              }
              checked={loginInfo.remember}
            >
              记住我
            </Checkbox>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 5,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: 20 }}
            >
              登录
            </Button>
            <Button type="primary" htmlType="submit" onClick={resetHandle}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  } else {
    // 注册面板
    container = (
      <div className={styles.container}>
        <Form
          name="basic2"
          autoComplete="off"
          ref={registerFormRef}
          onFinish={registerHandle}
        >
          <Form.Item
            label="登录账号"
            name="reginsterLoginId"
            rules={[{ required: true, message: "请输入账号, 仅此项为必填项" }]}
          >
            <Input
              placeholder="请输入账号"
              value={registerInfo.loginId}
              onChange={(e) =>
                updateInfo(
                  registerInfo,
                  e.target.value,
                  "reginsterLoginId",
                  setLoginInfo
                )
              }
            ></Input>
          </Form.Item>
          <Form.Item label="用户名称" name="nickname">
            <Input
              placeholder="请输入昵称，不填写默认为新用户xxx"
              value={registerInfo.nickname}
              onChange={(e) =>
                updateInfo(
                  registerInfo,
                  e.target.value,
                  "nickname",
                  setLoginInfo
                )
              }
            ></Input>
          </Form.Item>
          <Form.Item
            name="registerCaptcha"
            label="验证码"
            rules={[{ required: true, message: "请输入验证码" }]}
          >
            <Row align="middle">
              <Col span={16}>
                <Input
                  placeholder="请输入验证码"
                  value={loginInfo.captcha}
                  onChange={(e) =>
                    updateInfo(
                      registerInfo,
                      e.target.value,
                      "registerCaptcha",
                      setLoginInfo
                    )
                  }
                />
              </Col>
              <Col span={6}>
                <div
                  className={styles.captchaImg}
                  onClick={captchaClickHandle}
                  dangerouslySetInnerHTML={{ __html: captcha }}
                ></div>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 5,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: 20 }}
              onClick={registerHandle}
            >
              注册
            </Button>
            <Button type="primary" htmlType="submit">
              重置
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }

  return (
    <div>
      <Modal
        title="登录/注册"
        open={props.isShow}
        onOk={handleOk}
        onCancel={props.closeModal}
      >
        <Radio.Group
          value={value}
          onChange={onChange}
          buttonStyle="solid"
          className={styles.radioGroup}
        >
          <Radio.Button
            value={1}
            className={styles.radioButton}
            onClick={loginHandle}
          >
            登录
          </Radio.Button>
          <Radio.Button value={2} className={styles.radioButton}>
            注册
          </Radio.Button>
        </Radio.Group>
        {/* 显示需要对应功能表单 */}
        {container}
      </Modal>
    </div>
  );
}
