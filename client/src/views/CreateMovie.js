import React, { Component } from 'react';
import axios from 'axios';

import { SectionTitle } from '../componets/SectionTitle';
import { MovieForm } from '../componets/MovieForm';
import { CONSTANTS } from '../config/Constants';

export class CreateMovie extends Component {
  state = {
    movie: {
      title: '',
      genre: '',
      plot: '',
      poster: '',
      duration: '',
      image: '',
      actors: [],
    },
    temporalNames: [],
    celebrities: [],
  }

  handleChange = (e) => {
    console.log({ e });
    this.setState({
      movie: e,
    });
  }

  setActor = (object) => {
    /*this.setState({
      movie: object,
    });*/
  }

  handleSubmit = () => {
    const { movie } = this.state;
    axios.post(`${CONSTANTS.API_URL}/movies/create`, movie)
      .then((response) => {
        window.location.replace('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillMount =() => {
    axios.get(`${CONSTANTS.API_URL}/celebrities`)
      .then(({ data }) => {
        const { celebrities } = data;
        this.setState({
          celebrities,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="create-page">
        <SectionTitle>Create Movie</SectionTitle>
        <div className="form">
          <div className="form-data-container">
            <MovieForm
              state={this.state}
              handleChange={this.handleChange}
              setActor={this.setActor}
            />
            <div
              className="button"
              onClick={() => {
                this.handleSubmit();
              }}
            >
              Save
            </div>
          </div>
        </div>
      </div>
    );
  }
}
