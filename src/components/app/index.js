import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from '../home';
import Login from '../login';
import Signup from '../signup';
import Landing from '../landing';
import NavButtons from '../nav';
import SongLog from '../song-log';
import Schedule from '../schedule';
import SongStats from '../song-stats';
import {logoutRequest} from '../../action/auth.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(){
    this.setState({loggedIn:!this.state.loggedIn});
  }

  handleLogout(){
    logoutRequest('X-IBCF-Token');
  }

  handleSelect(e) {
  }

  render() {
    return (
      <Router>
        <div>
          <NavButtons
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            loggedIn={this.state.loggedIn}
          />

          <Route exact path='/' component={Landing}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/schedule' component={Schedule}/>
          <Route exact path='/stats' component={SongStats}/>
          <Route exact path='/log' component={SongLog}/>
        </div>
      </Router>
    );
  }
}

export default App;
