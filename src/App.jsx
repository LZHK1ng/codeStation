import './css/App.css';
import { Layout } from 'antd';
import NavHeader from './components/NavHeader';
import PageFooter from './components/PageFooter';
import RouterConfig from './router/index.jsx';
import LoginForm from './components/LoginForm'
import { useState } from 'react';

const {Header, Footer, Content} = Layout;

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 关闭弹框
  function closeModal() {
    setIsModalOpen(false);
  }

  // 打开弹框
  function openModal() {
    setIsModalOpen(true);
  }

  // 登录
  function loginHandle() {
    console.log('123')
    openModal();
  }

  return (
    <div className='App'>
      {/* 头部 */}
      <Header className='header'>
        <NavHeader loginHandle={loginHandle}/>
      </Header>
      {/* 匹配的路由 */}
      <Content className='content'>
        <RouterConfig />
      </Content>
      {/* 尾部 */}
      <Footer className='footer'>
        <PageFooter></PageFooter>
      </Footer>
      {/* 弹窗 */}
      <LoginForm isShow={isModalOpen} closeModal={closeModal} openModal={openModal} />
    </div>
  );
}

export default App;
