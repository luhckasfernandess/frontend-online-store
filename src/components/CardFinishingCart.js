import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles/CardFinshingCart.module.css';

class CardFinishingCart extends Component {
  render() {
    const { thumbnail, title, price, itemProduct, id } = this.props;

    return (
      <tr className={ styles.card }>
        <td className={ styles.container_img_title }>
          <img src={ thumbnail } alt={ title } />
          <p>{ title }</p>
        </td>
        <td>{price}</td>
        <td>{ itemProduct.filter((item) => item.id === id).length }</td>
      </tr>
    );
  }
}

CardFinishingCart.propTypes = {
  itemProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CardFinishingCart;
