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
    console.log(procces);
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

  cloudinaryUpload = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ggc9xwso');
    formData.append('api_key', '112262233337337');
    axios.post('https://api.cloudinary.com/v1_1/dlopomjr5/image/upload', formData, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
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
              toCloudinary={this.cloudinaryUpload}
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
