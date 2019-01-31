import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-selection">
          <div className="home-title">
            <h1>Movies and Celebreties</h1>
          </div>
          <div className="home-buttons">
            <Link to="/movies" className="link">
              <div className="button">
                See Movies
              </div>
            </Link>
            <Link to="/celebrities" className="link">
              <div className="button">
                See Celebreties
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
