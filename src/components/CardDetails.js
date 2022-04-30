import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';
import CardDetailsForm from './CardDetailsForm';
import './CardDetails.css';

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

  onTrigger = () => {
    const { objectDetails } = this.state;
    const { addCart } = this.props;
    addCart(objectDetails);
  }

  render() {
    const { objectDetails } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{objectDetails.title}</p>
        <div>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.onTrigger }
          >
            Adicionar ao carrinho
          </button>
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
