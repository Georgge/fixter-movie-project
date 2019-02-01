import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { CONSTANTS } from '../config/Constants';

export class MovieDatail extends Component {
  state = {
    movie : false,
    cast: [],
  }

  getCast = () => {
    const { movie } = this.state;
    movie.actors.map((celebrityID) => {
      axios.get(`${CONSTANTS.API_URL}/celebrities/${celebrityID}`)
        .then(({ data }) => {
          this.setState({
            cast: [
              ...this.state.cast,
              {
                id: data._id,
                photo: data.photo,
              },
            ],
          });
        });
    });
  }

  componentWillMount = () => {
    const { match } = this.props;
    const { params: { id } } = match;
    axios.get(`${CONSTANTS.API_URL}/movies/${id}`)
      .then(({ data }) => {
        this.setState({ movie: data }, () => {
          this.getCast();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    const { movie, cast } = this.state;

    return (
      <div className="wrapper">
        <div
          className="image-bg"
          style={
            movie ? { backgroundImage: `url(${movie.image})`, zIndex: '-1' }
              : { backgroundColor: '#000' }
          }
        />
        <div className="movie-detail">
          <header className="movie-detail-header">
            <div className="movie-detail-title">{movie.title}</div>
            <div>
              <Link to="/" className="button">Edit</Link>
            </div>
          </header>
          <div className="movie-detail-data">
            <div className="movie-detail-poster">
              <img src={movie.poster} />
            </div>
            <div className="movie-detail-shorts">
              <div><span>Genre: </span>{movie.genre}</div>
              <div><span>Duration: </span>{movie.duration} min.</div>
            </div>
            <div className="movie-detail-plot">
              <div>
                <span>Plot: </span>
                {movie.plot}
              </div>
            </div>
            <div className="movie-detail-cast">
              <h2>Cast:</h2>
              <div>
                {
                  cast
                    ? cast.map((celebrity) => {
                      return (
                        <Link to={`/celebrities/${celebrity.id}`} key={celebrity.id}>
                          <div
                            className="movie-detail-cast-mini"
                            style={{ backgroundImage: `url(${celebrity.photo})` }}
                          />
                        </Link>
                      );
                    })
                    : ''
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
