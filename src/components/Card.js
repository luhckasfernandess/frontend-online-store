import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { getPictureHighQuality } from '../services/api';
import styles from './styles/Card.module.css';
import freeShipping from '../assets/TruckFree.svg';

class Card extends Component {
  constructor() {
    super();
    // this.state = {
    //   imgHighQuality: [],
    // };
    this.onTrigger = this.onTrigger.bind(this);
  }

  // componentDidMount() {
  //   this.picturesHighQuality();
  // }

  onTrigger() {
    const { addCart, item } = this.props;
    addCart(item);
  }

  // picturesHighQuality = async () => {
  //   const { item } = this.props;
  //   const data = await getPictureHighQuality(item.thumbnail_id);
  //   const { variations } = data;
  //   const results = variations.filter((_, index) => index === 0);
  //   this.setState({ imgHighQuality: results });
  // }

  render() {
    const { item } = this.props;
    // const { imgHighQuality } = this.state;

    const free = (
      <div className={ styles.freeShipping }>
        <h2 data-testid="free-shipping">Frete grátis</h2>
        <img src={ freeShipping } alt="Envio Gratis" />
      </div>
    );

    return (
      <div data-testid="product" className={ styles.card }>
        <Link
          to={ `/CardDetails/${item.id}` }
          data-testid="product-detail-link"
        >
          <img src={ item.thumbnail } alt={ item.title } key={ item.id } />
        </Link>
        <div className={ styles.information }>
          <p>{ item.title }</p>
          <div>
            { item.shipping.free_shipping ? free : !free}
            <span>{ `R$ ${item.price}` }</span>
          </div>
          <button
            data-testid="product-add-to-cart"
            type="button"
            onClick={ this.onTrigger }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  addCart: PropTypes.func.isRequired,
};
export default Card;
