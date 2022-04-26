import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <p data-testid="home-initial-message">
          {name}
        </p>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Home;
