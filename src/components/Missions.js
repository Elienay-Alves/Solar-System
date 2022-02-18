import React, { Component } from 'react';
import Titles from './Title';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Titles headline="Missões" />
      </div>
    );
  }
}

export default Missions;
