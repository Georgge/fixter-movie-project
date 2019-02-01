import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { SectionTitle } from '../componets/SectionTitle';
import { CONSTANTS } from '../config/Constants';

export class MovieList extends Component {
  state = {
    movies: [],
  }

  componentDidMount = () => {
    axios.get(`${CONSTANTS.API_URL}/movies`)
      .then(({ data }) => {
        this.setState(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="list-wrapper">
        <SectionTitle>Movies</SectionTitle>
        <div className="list-container">
          {
            movies.map((movie) => {
              return (
                <Link to={`/movies/${movie._id}`} key={movie._id}>
                  <div className="movie-card">
                    <div className="movie-card-poster">
                      <img src={movie.poster} />
                    </div>
                    <div className="movie-card-name">
                      {movie.title}
                    </div>
                  </div>
                </Link>
              );
            })
          }
        </div>
      </div>
    );
  }
}
