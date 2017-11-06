import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from '../home';
import NavButtons from '../nav';
import SongLog from '../song-log';
import Schedule from '../schedule';
import SongStats from '../song-stats';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
  }

  render() {
    return (
      <Router>
        <div>
          <NavButtons />

          <Route exact path='/' component={Home}/>
          <Route exact path='/ ' component={Home}/>
          <Route exact path='/schedule' component={Schedule}/>
          <Route exact path='/stats' component={SongStats}/>
          <Route exact path='/log' component={SongLog}/>
        </div>
      </Router>
    );
  }
}

export default App;
