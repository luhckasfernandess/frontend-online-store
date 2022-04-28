import React, { Component } from 'react';

class CardDetailsForm extends Component {
  DATA;

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
    this.DATA = JSON.parse(localStorage.getItem('arrayRatings'));
    console.log(localStorage.getItem('arrayRatings'));

    if (localStorage.getItem('arrayRatings')) {
      this.setState({
        arrayRatings: this.DATA.arrayRatings,
      });
    } else {
      this.setState({
        arrayRatings: [],
      });
    }
  }

  componentDidUpdate() {
    const { arrayRatings } = this.state;
    const json = JSON.stringify(arrayRatings);
    localStorage.setItem('arrayRatings', json);
  }

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
    }));
  }

  render() {
    const { arrayRatings, email, text } = this.state;
    return (
      <div>
        <form>
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
            <label htmlFor="input-rating-1">
              <input
                type="radio"
                value="1"
                name="rating"
                data-testid="1-rating"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="input-rating-2">
              <input
                type="radio"
                value="2"
                name="rating"
                data-testid="2-rating"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="input-rating-3">
              <input
                type="radio"
                value="3"
                name="rating"
                data-testid="3-rating"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="input-rating-4">
              <input
                type="radio"
                value="4"
                name="rating"
                data-testid="4-rating"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="input-rating-5">
              <input
                type="radio"
                value="5"
                name="rating"
                data-testid="5-rating"
                onChange={ this.handleChange }
              />
            </label>
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
        </form>
        {arrayRatings.map((item, index) => (
          <div key={ index }>
            <p>{ item.email }</p>
            <p>{ item.rating }</p>
            <p>{ item.text }</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CardDetailsForm;
