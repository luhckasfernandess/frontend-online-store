import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../img/Cart.svg';
import { getProductDetails } from '../services/api';
import CardDetailsForm from './CardDetailsForm';

class CardDetails extends Component {
  constructor() {
    super();
    this.state = {
      objectDetails: {},
    };
  }

  componentDidMount = () => {
    this.productDetails();
  }

  productDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const data = await getProductDetails(id);
    this.setState({ objectDetails: data });
  }

  onTrigger = (event) => {
    const { addCart } = this.props;
    addCart(event.target.parentElement.firstChild.innerText);
  }

  render() {
    const { objectDetails: { title, id } } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <div>
          <p>{id}</p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.onTrigger }
          >
            Adicionar ao carrinho
          </button>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src={ Icon } alt="icon" />
          </Link>
        </div>
        <CardDetailsForm />
      </div>
    );
  }
}

CardDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  addCart: PropTypes.func.isRequired,
};

export default CardDetails;
