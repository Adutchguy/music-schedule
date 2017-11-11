import React, { Component } from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class NavButton extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>

        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to='/'>
              <a> HOME </a>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>


        <Navbar.Collapse>
          <Nav pullRight>
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
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavButton;
