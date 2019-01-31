import React, { Component } from 'react';

import { SectionTitle } from '../componets/SectionTitle';
import { MovieForm } from '../componets/MovieForm';

export class CreateMovie extends Component {
  state = {
    title: '',
    genre: '',
    plot: '',
    poster: '',
    image: '',
  }

  handleChange = (e) => {
    this.setState(e);
  }

  handleSubmit = () => {
    console.log('not');
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
