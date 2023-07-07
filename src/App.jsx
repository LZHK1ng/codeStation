import './css/App.css';
import { Layout } from 'antd';
import NavHeader from './components/NavHeader';
import PageFooter from './components/PageFooter';
import RouterConfig from './router/index.jsx';

const {Header, Footer, Content} = Layout;

function App() {
  return (
    <div className='App'>
      {/* 头部 */}
      <Header className='header'>
        <NavHeader />
      </Header>
      {/* 匹配的路由 */}
      <Content className='content'>
        <RouterConfig />
      </Content>
      {/* 尾部 */}
      <Footer className='footer'>
        <PageFooter></PageFooter>
      </Footer>
    </div>
  );
}

export default App;
