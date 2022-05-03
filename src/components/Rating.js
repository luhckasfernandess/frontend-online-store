import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <span className="star-rating star-5">
        <input
          type="radio"
          name="rating"
          value="1"
          onChange={ handleChange }
          data-testid="1-rating"
        />
        <i />
        <input
          type="radio"
          name="rating"
          value="2"
          onChange={ handleChange }
          data-testid="2-rating"
        />
        <i />
        <input
          type="radio"
          name="rating"
          value="3"
          onChange={ handleChange }
          data-testid="3-rating"
        />
        <i />
        <input
          type="radio"
          name="rating"
          value="4"
          onChange={ handleChange }
          data-testid="4-rating"
        />
        <i />
        <input
          type="radio"
          name="rating"
          value="5"
          onChange={ handleChange }
          data-testid="5-rating"
        />
        <i />
      </span>
    );
  }
}

Rating.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Rating;
