import React, { Component, createRef } from 'react';
import styles from './CardDetailsForm.module.css';
import Rating from './Rating';

class CardDetailsForm extends Component {
  constructor() {
    super();
    this.state = {
      arrayRatings: [],
      email: '',
      rating: [],
      text: '',
    };
    this.myRef = createRef();
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
    console.log(target);
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
    const { arrayRatings, email, text, rating } = this.state;
    return (
      <div className={ styles.container }>
        <h1>Avalie esse Produto</h1>
        <form>
          <label htmlFor="input-email" className={ styles.email }>
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
            <Rating
              ref={ this.myRef }
              handleChange={ this.handleChange }
              rating={ rating }
            />
          </div>
          <label htmlFor="input-text" className={ styles.description }>
            <input
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
        <div className={ styles.cardAvaliation }>
          {arrayRatings.map((item, index) => (
            <div key={ index }>
              <h4>{ item.email }</h4>
              <p>{ item.rating }</p>
              <span>{ item.text }</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CardDetailsForm;
