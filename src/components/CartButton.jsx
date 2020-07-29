import React, { Component } from 'react';

export default class CartButton extends Component {
  render() {
    return (
      <button
        onClick={this.props.buttonId}
        data-testid="product-add-to-cart"
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}
