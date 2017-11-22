import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from '../home';
import Landing from '../landing';
import NavButtons from '../nav';
import SongLog from '../song-log';
import Schedule from '../schedule';
import SongStats from '../song-stats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(){
    this.setState({loggedIn:!this.state.loggedIn});
  }

  handleSelect(e) {
  }

  render() {
    return (
      <Router>
        <div>
          <NavButtons
            handleLogin={this.handleLogin}
            loggedIn={this.state.loggedIn}
          />

          <Route exact path='/' component={Landing}/>
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
