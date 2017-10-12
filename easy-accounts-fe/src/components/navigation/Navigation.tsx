import * as React from 'react';
import './Navigation.css';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Navigation extends React.Component {
  render() {
    return (
      <div className="Nav-component">
        <Nav>
          <NavItem>
            <NavLink href="#">Balance</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Add Entry</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Projections</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Remainders</NavLink>
          </NavItem>
        </Nav>       
      </div>
    );
  }
}

export default Navigation;
