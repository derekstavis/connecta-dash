import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
const { SubMenu: SubMenuItem , Item: MenuItem } = Menu;

class SideMenu extends Component {

  renderMenuItem = (route) => {
    const { name, subroutes, icon = 'profile' } = route;
    const title = (
      <span>
        <Icon type={icon} />
        <span>{name}</span>
      </span>
    )

    const renderSubMenuItem = ({ name:itemName }) => (
      <MenuItem key={itemName}>
        {itemName}
      </MenuItem>
    )

    return subroutes && subroutes.length > 0 ? (
      <SubMenuItem key={name} title={title}>
        {subroutes.map(renderSubMenuItem)}
      </SubMenuItem>
    ) : (
      <MenuItem key={name}>
        {title}
      </MenuItem>
    )
  }

  render(){
    const {
      collapsed,
      routes,
    } = this.props

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {routes.map(this.renderMenuItem)}
        </Menu>
      </Sider>
    )
  }
}

SideMenu.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    subroutes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    }))
  })).isRequired
}

export default SideMenu