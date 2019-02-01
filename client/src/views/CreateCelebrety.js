import React, { Component } from 'react';
import axios from 'axios';

import { SectionTitle } from '../componets/SectionTitle';
import { CelebrityForm } from '../componets/CelebrityForm';
import { CONSTANTS } from '../config/Constants';

export class CreateCelebrety extends Component {
  state = {
    name: '',
    occupation: '',
    description: '',
    photo: '',
  }

  handleChange = (e) => {
    this.setState(e);
  }

  handleSubmit = () => {
    axios.post(`${CONSTANTS.API_URL}/celebrities/create`, this.state)
      .then((response) => {
        window.location.replace('/celebrities');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  cloudinaryUpload = () => {
    const { photo } = this.state;
    const formData = new FormData();

    formData.append('file', photo[0]);
    formData.append('folder', 'movies/celebrity');
    formData.append('upload_preset', CONSTANTS.CLOUDINARY_UPLOAD_PRESET);
    formData.append('api_key', CONSTANTS.CLOUDINARY_KEY);

    axios.post(CONSTANTS.CLOUDINARY, formData, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    }).then(({ data }) => {
      this.setState({
        photo: data.secure_url,
      }, () => {
        this.handleSubmit();
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="create-page">
        <SectionTitle>Create Celebrety</SectionTitle>
        <div className="form">
          <div className="form-data-container">
            <CelebrityForm
              state={this.state}
              handleChange={this.handleChange}
            />
            <div
              className="button"
              role="button"
              tabIndex={0}
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
