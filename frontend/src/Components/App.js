import React from 'react';
import '../App.css';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

            <Menu.Item key="1">   
              <Link to="/">
                Find Projects
                </Link>
            </Menu.Item>


            <Menu.Item key="2">Find Projects</Menu.Item>
            <Menu.Item key="3">Connect w/ Students</Menu.Item>
            <Menu.Item key="3">My Page / Messages</Menu.Item>
            <Menu.Item key="3">Sign Up</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            
            <div className="page1">
              <h1>iStudent</h1>
              <h2>Turning Ideas Into Reality</h2>
              <br /><br />
              <h2>A launchpad for student curation and collaboration</h2>
              <button>Join The Community</button>
            </div>

            <div className="page2">
              <h1>Connect</h1>
              <button>Login for Ideas and View Others</button>
            </div>

            <div className="page3">
              <h1>Collaborate</h1>
              <button>Search up Types of Ideas Using Tabgs</button>
            </div>
            
            <div className="page4">
              <h1>Create</h1>
              <button>Contact with Others on Interests to Collaborate and Connect on Linkedin</button>
            </div>
            
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;
