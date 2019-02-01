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
    images: {
      poster: null,
      image: null,
    },
    celebrities: [],
  }

  handleChange = (e) => {
    this.setState({
      movie: e,
    });
  }

  setCast = (id, name) => {
    this.setState({
      movie: id,
      temporalNames: name,
    });
  }

  setImages = (file) => {
    console.log(file);
    this.setState({
      images: file,
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

  cloudinaryUpload = () => {
    const { images } = this.state;
    for (let i = 0; i < 2; i++) {
      const formData = new FormData();

      if (i === 0) {
        formData.append('file', images.image[0]);
        formData.append('folder', 'movies/bg');
      } else {
        formData.append('file', images.poster[0]);
        formData.append('folder', 'movies/poster');
      }
      formData.append('upload_preset', CONSTANTS.CLOUDINARY_UPLOAD_PRESET);
      formData.append('api_key', CONSTANTS.CLOUDINARY_KEY);

      axios.post(CONSTANTS.CLOUDINARY, formData, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      }).then(({ data }) => {
        console.log(data);
        if (i === 0) {
          this.setState({
            movie: { ...this.state.movie, image: data.secure_url },
          }, () => {
            if (this.state.movie.poster !== '' && this.state.movie.image !== '')
              this.handleSubmit();
          });
        } else {
          this.setState({
            movie: { ...this.state.movie, poster: data.secure_url },
          }, () => {
            if (this.state.movie.poster !== '' && this.state.movie.image !== '')
              this.handleSubmit();
          });
        }
      }).catch((error) => {
        console.log(error);
      });
    }
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
              setCast={this.setCast}
              toCloudinary={this.cloudinaryUpload}
              setImages={this.setImages}
            />
            <div
              className="button"
              onClick={() => {
                this.cloudinaryUpload();
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
