import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './views/Home';
import { CreateCelebrety } from './views/CreateCelebrety';
import { CelebrityList } from './views/CelebrityList';
import { CreateMovie } from './views/CreateMovie';
import { MovieList } from './views/MovieList';
import { MovieDatail } from './views/MovieDatail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/celebrities/create" component={CreateCelebrety} />
            <Route exact path="/celebrities" component={CelebrityList} />
            <Route exact path="/movies/create" component={CreateMovie} />
            <Route exact path="/movies" component={MovieList} />
            <Route path="/movies/:id" component={MovieDatail} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
