import React from 'react'
// import 'font-awesome/scss/font-awesome.scss'

import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import NavItems from '../components/NavItems'

module.exports = React.createClass({
  getInitialState: function () {
    return {
      defaultTitle: <span>New Project | <em>standard style</em></span>,
      pageTitle: ''
    }
  },

  setTitle: function (page) {
    this.setState({pageTitle: page})
  },

  render () {
    return (
      <div>
        <NavigationDrawer
          navItems={NavItems}
          mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
          toolbarTitle={this.state.pageTitle ? this.state.pageTitle : this.state.defaultTitle}
          drawerTitle='Navigation'
        >
          <div id='body'>
            <div id='main'>
              {React.cloneElement(this.props.children, {setTitle: this.setTitle})}
            </div>
          </div>
          <footer className='md-paper md-paper--2'>
            © Ryan Keller - Built to Material Design
          </footer>
        </NavigationDrawer>
      </div>
    )
  }
})
