import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import './styles.css';
import { SideMenu } from '../../Components';

const { Header, Content } = Layout;

class LoggedPages extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ overflow: 'auto', height: '100vh'}}>
        <SideMenu collapsed={collapsed}/>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LoggedPages;