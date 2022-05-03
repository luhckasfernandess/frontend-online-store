import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';
import CardDetailsForm from '../components/CardDetailsForm';
import styles from './Detalhes.module.css';
import Left from '../img/circle-left.svg';
import Right from '../img/circleRight.svg';

class CardDetails extends Component {
  constructor() {
    super();
    this.state = {
      titulo: '',
      imagens: [],
      atributos: [],
      objectDetails: {},
    };
    // this.myRef = createRef();
  }

  componentDidMount = async () => {
    await this.productDetails();
  }

  productDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const data = await getProductDetails(id);
    const { pictures, title, attributes } = data;
    this.setState({
      titulo: title,
      imagens: pictures,
      atributos: attributes,
      objectDetails: data,
    });
  }

  onTrigger = () => {
    const { objectDetails } = this.state;
    const { addCart } = this.props;
    addCart(objectDetails);
  }

  handleLeftClick = () => {
    // event.preventDefault();
    // const { current } = this.myRef;
    // current.scrollLeft -= current.offsetWidth;
  }

  handleRightClick = () => {
    // event.preventDefault();
    // const { current } = this.myRef;
    // current.scrollLeft += current.offsetWidth;
  }

  render() {
    const { titulo, imagens, atributos, objectDetails } = this.state;
    return (
      <section className={ styles.section }>
        <div className={ styles.container }>

          <p
            className={ styles.ProductTitle }
            data-testid="product-detail-name"
          >
            { titulo }
          </p>
          <div className={ styles.containerImagem }>
            <button
              type="button"
              onClick={ this.handleLeftClick }
              className={ styles.arrowButtons }
            >
              <img src={ Left } alt="Mover carrousel para esquerda " />
            </button>
            <ul className={ styles.slider } ref={ this.myRef }>
              { imagens.map((item, index) => (
                <div key={ index } className={ styles.items }>
                  <img src={ item.url } alt={ titulo } />
                </div>
              )) }
            </ul>
            <button
              type="button"
              className={ styles.arrowButtons }
              onClick={ this.handleRightClick }
            >
              <img src={ Right } alt="Mover carrousel para direita " />
            </button>
          </div>
          <div className={ styles.containerPrice }>
            <p>
              <span>R$:</span>

              { objectDetails.price }

            </p>
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ this.onTrigger }
            >
              Adicionar ao carrinho
            </button>
          </div>
          <div className={ styles.atributos }>
            { atributos.map((item, index) => (
              <div key={ index }>
                <h4>
                  { item.name }
                  :
                </h4>
                <p>{ item.value_name }</p>
              </div>
            )) }
          </div>
          <CardDetailsForm />
        </div>
      </section>
    );
  }
}

CardDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  addCart: PropTypes.func.isRequired,
};

export default CardDetails;
