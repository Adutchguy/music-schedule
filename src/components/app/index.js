import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from '../home';
import Login from '../login';
import Signup from '../signup';
import Landing from '../landing';
import NavButtons from '../nav';
import SongLog from '../song-log';
import Schedule from '../schedule';
import SongStats from '../song-stats';
import * as util from '../../lib/util.js';
import {logoutRequest} from '../../action/auth.js';
import {userProfileRequest} from '../../action/user.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loggedInProfile: {},
    };

    this.renderHome = this.renderHome.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.renderSignup = this.renderSignup.bind(this);
    this.renderSongLog = this.renderSongLog.bind(this);
    this.renderLanding = this.renderLanding.bind(this);
    this.renderSchedule = this.renderSchedule.bind(this);
    this.renderSongStats = this.renderSongStats.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  // CHECK FOR COOKIE TO DETERMINE LOGGED IN STATE
  componentDidMount(){
    let cookieToken = util.cookieFetch('X-IBCF-Token');
    cookieToken ?
      this.setState({loggedIn: true}) :
      this.setState({loggedIn: false});
    if(this.state.loggedIn) {
      userProfileRequest(cookieToken).then((profile) => {
        this.setState({loggedInProfile: profile});
      });
    }
    console.log(this.state);
  }



  // HANDLE EVENTS
  handleLogin(){
    this.setState({loggedIn:!this.state.loggedIn});
  }

  handleLogout(){
    logoutRequest('X-IBCF-Token');
    this.setState({loggedIn: false});
  }

  handleSelect(e) {
  }

  handleRedirect(component){
    return <Redirect to={component} />;
  }

  // COMPONENT FUNCTIONS
  renderLogin(){
    return <Login handleLogin={this.handleLogin}/>;
  }

  renderLanding(){
    return <Landing loggedIn={this.state.loggedIn}/>;
  }

  renderSignup() {
    return <Signup />;
  }

  renderHome(){
    return <Home />;
  }

  renderSchedule(){
    return <Schedule />;
  }

  renderSongStats(){
    return <SongStats />;
  }

  renderSongLog(){
    return <SongLog />;
  }

  render() {
    return (
      <Router>
        <div>
          <NavButtons
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            loggedIn={this.state.loggedIn}
            loggedInProfile={this.state.loggedInProfile}
            redirect={this.handleRedirect}
          />

          <Route exact path='/' render={this.renderLanding}/>
          <Route exact path='/login' render={this.renderLogin}/>
          <Route exact path='/signup' component={this.renderSignup}/>
          <Route exact path='/home' component={this.renderHome}/>
          <Route exact path='/schedule' component={this.renderSchedule}/>
          <Route exact path='/stats' component={this.renderSongStats}/>
          <Route exact path='/log' component={this.renderSongLog}/>
        </div>
      </Router>
    );
  }
}

export default App;
