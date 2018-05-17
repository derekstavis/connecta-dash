import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import './styles.css';
import { SideMenu } from '../../Components';
import routes from './routes';
import { RequestProvider } from '../../Requests'
import CreateProduct from './Products/CreateProduct';
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from '../../utils/ProtectedRoute'

const { Header, Content } = Layout;

class LoggedPages extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  getSubRoutes = (subroutes = []) => {
    console.log(subroutes)
    return (<Switch>
      {subroutes.map(({component, path, allowedRoles}) => 
        allowedRoles ?
        (<ProtectedRoute
          component={() => (<div>Cadastro 2</div>)}
          path={path}
          key={path}
          allowedRoles={allowedRoles}
        />) :
        (
          <Route
            component={() => (<div>Cadastro 2</div>)}
            exact
            key={path}
            path={path}
          />
        )
      )}
    </Switch>)
  }

  getRoutes = () => {
    return routes.map(({
      subroutes = [],
      component,
      path,
      allowedRoles,
    }) => {
      if(component && subroutes.length < 1){
        return allowedRoles ?
          (<ProtectedRoute
            component={component}
            path={path}
            key={path}
            allowedRoles={allowedRoles}
          />) :
          (
            <Route
              component={component}
              exact
              key={path}
              path={path}
            />
          )
      }

      if(subroutes.length > 0){
        return allowedRoles ? (<ProtectedRoute
          component={this.getSubRoutes(subroutes)}
          path={path}
          key={path}
          allowedRoles={allowedRoles}
        />) :
        (
          <Route
            component={this.getSubRoutes(subroutes)}
            key={path}
            exact
            path={path}
          />
        )
      }

      return null
    })
  }

  render() {
    const { collapsed } = this.state;
    return (
      <RequestProvider>
        <Layout style={{overflow: 'inital', minHeight: '100vh'}}>
          <SideMenu collapsed={collapsed} routes={routes}/>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{margin: '24px 16px', padding: 24, background: '#fff', overflow: 'initial' }}>
              <Switch>
                {this.getRoutes()}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </RequestProvider>
    );
  }
}

export default LoggedPages;