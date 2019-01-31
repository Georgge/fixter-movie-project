import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './views/Home';
import { CreateCelebrety } from './views/CreateCelebrety';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/celebrities" component={CreateCelebrety} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
