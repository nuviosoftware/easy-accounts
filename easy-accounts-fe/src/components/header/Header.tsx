import * as React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
        <div className="Header-component">
          <h1>Easy Accounts</h1>
          <p>A simple account keeping software by <a href="http://nuviosoftware.co.uk" target="_blank">Nuvio Software solutions</a>.</p>
        </div>
    );
  }
}

export default Header;
