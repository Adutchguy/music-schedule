import React, { Component } from 'react';
import PropTypes from 'prop-types';
import renderIf from 'render-if';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class NavButtons extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>

        {renderIf(!this.props.loggedIn)(
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to='/login'>
                <a onClick={this.props.handleLogin}> LOGIN </a>
              </LinkContainer>
            </Navbar.Brand>
          </Navbar.Header>
        )}

        {renderIf(this.props.loggedIn)(
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to='/home'>
                <a> HOME </a>
              </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
        )}

        {renderIf(this.props.loggedIn)(
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
              {renderIf(this.props.loggedIn)(
                <LinkContainer to='/'>
                  <NavItem onClick={this.props.handleLogin}> LOGOUT </NavItem>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        )}
      </Navbar>

    );
  }
}

NavButtons.propTypes = {
  handleLogin: PropTypes.func,
  loggedIn: PropTypes.bool,
};

export default NavButtons;
