import React, { Component } from 'react';
import styles from './CardDetailsForm.module.css';
import Rating from './Rating';

class CardDetailsForm extends Component {
  constructor() {
    super();
    this.state = {
      arrayRatings: [],
      email: '',
      rating: '',
      text: '',
    };
  }

  componentDidMount() {
    const x = localStorage.getItem('arrayRating');
    const data = JSON.parse(x);
    if (data) {
      this.setState({
        arrayRatings: data,
      });
    } else {
      this.setState({
        arrayRatings: [],
      });
    }
  }

  // componentDidUpdate() {
  //   const { arrayRatings } = this.state;
  //   const json = JSON.stringify(arrayRatings);
  //   localStorage.setItem('arrayRatings', json);
  // }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSummit = () => {
    const { email, rating, text } = this.state;
    const data = {
      email,
      rating,
      text,
    };
    this.setState(({ arrayRatings }) => ({
      arrayRatings: [...arrayRatings, data],
    }), () => {
      const { arrayRatings } = this.state;
      const json = JSON.stringify(arrayRatings);
      localStorage.setItem('arrayRating', json);
    });
  }

  render() {
    const { arrayRatings, email, text } = this.state;
    return (
      <div>
        <form className={ styles.container }>
          <fieldset>
            <label htmlFor="input-email">
              <input
                type="email"
                data-testid="product-detail-email"
                placeholder="Email"
                name="email"
                value={ email }
                required
                onChange={ this.handleChange }
              />
            </label>
            <div>
              <Rating handleChange={ this.handleChange } />
            </div>
            <label htmlFor="input-text">
              <input
                type="text"
                data-testid="product-detail-evaluation"
                placeholder="Mensagem (opcional)"
                name="text"
                value={ text }
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              data-testid="submit-review-btn"
              onClick={ this.handleSummit }
            >
              Avaliar
            </button>
          </fieldset>
        </form>
        <div>
          {arrayRatings.map((item, index) => (
            <div key={ index }>
              <p>{ item.email }</p>
              <p>{ item.rating }</p>
              <p>{ item.text }</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CardDetailsForm;
