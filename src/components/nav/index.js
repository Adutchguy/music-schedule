import React, { Component } from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class NavButton extends Component {
  render() {
    return (
      <Navbar>
        <Nav>

          <Navbar.Brand>
            <Navbar.Header>
              <LinkContainer to='/'>
                <NavItem> HOME </NavItem>
              </LinkContainer>
            </Navbar.Header>
          </Navbar.Brand>

          <LinkContainer to='/schedule'>
            <NavItem> SCHEDULE </NavItem>
          </LinkContainer>

          <LinkContainer to='/stats'>
            <NavItem> SONG STATS </NavItem>
          </LinkContainer>

          <LinkContainer to='/log'>
            <NavItem> SONG LOG </NavItem>
          </LinkContainer>

        </Nav>
      </Navbar>
    );
  }
}

export default NavButton;
