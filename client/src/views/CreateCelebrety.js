import React, { Component } from 'react';
import axios from 'axios';

import { SectionTitle } from '../componets/SectionTitle';
import { CelebrityForm } from '../componets/CelebrityForm';
import { CONSTANTS } from '../config/Constants';

export class CreateCelebrety extends Component {
  state = {
    name: '',
    occupation: '',
    famousPhrase: '',
  }

  handleChange = (e) => {
    this.setState(e);
  }

  handleSubmit = () => {
    axios.post(`${CONSTANTS.API_URL}/celebrities/create`, this.state)
      .then((response) => {
        window.location.replace('/');
      })
      .catch((error) => {
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
