import React, { Component } from 'react';

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = { cartProducts: localStorage.getItem('inCart') };
  }

  render() {
    return (
      <div>
        {JSON.parse(localStorage.getItem('inCart')).map((product) => (
          <div key={product.id}>{product.title}</div>))}
        <input
          data-testid="checkout-fullname" placeholder="Nome Completo" type="text"
        />
        <input
          data-testid="checkout-email" placeholder="email" type="email"
        />
        <input
          data-testid="checkout-cpf" placeholder="CPF" type="number"
        />
        <input
          data-testid="checkout-phone" placeholder="telefone" type="number"
        />
        <input
          data-testid="checkout-cep" placeholder="CEP" type="number"
        />
        <input
          data-testid="checkout-address" placeholder="endereço" type="text"
        />
        <button type="button">Finalizar Compra</button>
      </div>
    );
  }
}
