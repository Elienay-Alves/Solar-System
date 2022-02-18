import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Titles extends Component {
  render() {
    const { headline } = this.props;
    return (
      <div>
        <h2>
          {headline}
        </h2>
      </div>
    );
  }
}

Titles.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Titles;
