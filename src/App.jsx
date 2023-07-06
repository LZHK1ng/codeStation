import './css/App.css';
import { Layout } from 'antd';
import NavHeader from './components/NavHeader';
import PageFooter from './components/PageFooter';
import { Content, Footer, Header } from 'antd/es/layout/layout';

function App() {
  return (
    <div className='App'>
      {/* 头部 */}
      <Header>
        <NavHeader />
      </Header>
      {/* 匹配的路由 */}
      <Content></Content>
      {/* 尾部 */}
      <Footer>
        <PageFooter></PageFooter>
      </Footer>
    </div>
  );
}

export default App;
