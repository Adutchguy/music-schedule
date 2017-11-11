import React, { Component } from 'react';
import renderIf from 'render-if';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class NavButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(){
    this.setState({loggedIn:!this.state.loggedIn});
  }

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

        {renderIf(!this.state.loggedIn)(
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem onClick={this.handleLogin}> LOGIN </NavItem>
            </Nav>
          </Navbar.Collapse>
        )}


        {renderIf(this.state.loggedIn)(
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to='/schedule'>
                <NavItem> SCHEDULE </NavItem>
              </LinkContainer>

              <LinkContainer to='/stats'>
                <NavItem> SONG STATS </NavItem>
              </LinkContainer>

              <LinkContainer to='/log'>
                <NavItem> SONG LOG </NavItem>
              </LinkContainer>
              {renderIf(this.state.loggedIn)(
                <LinkContainer to='/'>
                  <NavItem onClick={this.handleLogin}> LOGOUT </NavItem>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        )}
      </Navbar>

    );
  }
}

export default NavButton;
