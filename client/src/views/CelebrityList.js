import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div className="section-button">
          <Link to="/celebrities/create">
            <div className="button">Add Celebrity</div>
          </Link>
        </div>
        <div className="list-container">
          {
            celebrities.map((celebrity) => {
              return (
                <Link
                  to={`/celebrities/${celebrity._id}`}
                  className="celebrity-card"
                  key={celebrity._id}
                >
                  <div className="celebrity-card-photo">
                    <img src={celebrity.photo} />
                  </div>
                  <div className="celebrity-card-name">
                    {celebrity.name}
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
