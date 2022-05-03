import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './Ratting.module.css';

class Rating extends Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
    };
  }

  setRating = (ratingValue) => {
    this.setState({ rating: ratingValue });
  }

  render() {
    const size = 5;
    const ratingValue = 1;

    const { handleChange } = this.props;
    const { rating } = this.state;

    return (
      <div className={ styles.ratting }>
        {[...Array(size)].map((_, index) => (
          <label htmlFor={ `${index + ratingValue}` } key={ index }>
            <input
              id={ `${index + ratingValue}` }
              type="radio"
              name="rating"
              data-testid={ `${ratingValue + index}-rating` }
              value={ ratingValue + index }
              onChange={ handleChange }
              onClick={ () => this.setRating(ratingValue + index) }
            />
            <FaStar
              size="24"
              color={ (ratingValue + index) <= rating ? '#ffc107' : '#e4e5e9' }
              className={ styles.star }
            />
          </label>

        ))}
      </div>
    );
  }
}

Rating.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Rating;
