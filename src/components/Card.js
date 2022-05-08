import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { getPictureHighQuality } from '../services/api';
// import Loading from './Loading';
import styles from './styles/Card.module.css';
import freeShipping from '../assets/TruckFree.svg';

class Card extends Component {
  constructor() {
    super();
    // this.state = {
    //   // imgHighQuality: [],
    //   loading: false,
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

  // async picturesHighQuality() {
  //   const { item } = this.props;
  //   this.setState({ loading: true });
  //   const data = await getPictureHighQuality(item.thumbnail_id);
  //   const results = data.variations.filter((_, index) => index === 0);
  //   this.setState({ imgHighQuality: results, loading: false });
  // }

  render() {
    const { item } = this.props;
    // const { imgHighQuality, loading } = this.state;

    const free = (
      <div className={ styles.freeShipping }>
        <h2 data-testid="free-shipping">Frete grátis</h2>
        <img src={ freeShipping } alt="Envio Gratis" />
      </div>
    );

    // if (loading) {
    //   return <Loading />;
    // }

    return (
      <div data-testid="product" className={ styles.card }>
        <Link
          to={ `/CardDetails/${item.id}` }
          data-testid="product-detail-link"
        >

          <img src={ item.thumbnail } alt={ item.title } />
          {/* {imgHighQuality.map(({ url }) => (
            <img src={ url } alt={ item.title } key={ item.id } />

          ))} */}
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
