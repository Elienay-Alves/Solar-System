import React, { Component } from 'react';
import Titles from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Titles headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
