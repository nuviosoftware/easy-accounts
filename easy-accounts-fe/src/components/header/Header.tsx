import * as React from 'react';
import './Header.css';
import Navigation from '../navigation/Navigation';

class Header extends React.Component {
  render() {
    return (
        <div className="Header-component">
          <h1>Easy Accounts</h1>
          <p>A simple account keeping software by <a href="http://nuviosoftware.co.uk" target="_blank">Nuvio Software solutions</a>.</p>
        
          <Navigation />
        </div>
    );
  }
}

export default Header;
