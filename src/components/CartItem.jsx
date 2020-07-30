// Componente para a página ShoppingCart que mapeia cada item adicionado ao carrinho
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartButtonQuantity from './CartButtonQuantity';

export default class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 1 };
    this.addQuantity = this.addQuantity.bind(this);
    this.subtractQuantity = this.subtractQuantity.bind(this);
  }

  addQuantity() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  subtractQuantity() {
    const { counter } = this.state;
    return (counter === 1)
    ? counter
    : this.setState({ counter: counter - 1 });
  }

  render() {
    const { id, title, price, thumbnail } = this.props.product;
    return (
      <div>
        <div>
          <img src={thumbnail} alt={title} />
          <p data-testid="shopping-cart-product-name">{title}</p>
          <p>{id}</p>
          <p>{`R$ ${price * this.state.counter}`}</p>
          <Link data-testid="product-detail-link" to={`/product/${id}`}>
            VER DETALHES
          </Link>
        </div>
        <CartButtonQuantity
          addQuantity={this.addQuantity}
          subtractQuantity={this.subtractQuantity}
          counter={this.state.counter}
        />
      </div>
    );
  }
}
