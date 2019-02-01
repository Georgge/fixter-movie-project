import React, { Component } from 'react';
import axios from 'axios';

import { SectionTitle } from '../componets/SectionTitle';
import { CONSTANTS } from '../config/Constants';

export class CelebrityList extends Component {
  state = {
    celebrities: [],
  }

  componentDidMount = () => {
    axios.get(`${CONSTANTS.API_URL}/celebrities`)
      .then(({data}) => {
        this.setState(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { celebrities } = this.state;
    return (
      <div className="list-wrapper">
        <SectionTitle>Celebrities</SectionTitle>
        <div className="list-container">
          {
            celebrities.map((celebrity) => {
              return (
                <div className="celebrity-card" key={celebrity._id}>
                  <div className="celebrity-card-photo">
                    <img src={celebrity.photo} />
                  </div>
                  <div className="celebrity-card-name">
                    {celebrity.name}
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
