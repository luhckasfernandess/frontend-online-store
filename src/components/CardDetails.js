import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';

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

  render() {
    const { objectDetails: { title } } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
      </div>
    );
  }
}

CardDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CardDetails;
