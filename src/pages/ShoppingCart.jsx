import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartinho: this.props.carrinho };
  }

  render() {
    return (
      <div>
        {this.state.cartinho === '' && <section data-testid="shopping-cart-empty-message" className="cart-container">
          Seu carrinho está vazio
        </section>}
        <div>
          {this.state.cartinho !== '' &&
          this.state.cartinho.map((item) => (
            <div>
              <CartItem key={item.id} product={item} />
            </div>
          ))
        }
        </div>
        <Link to="/checkout">Ir para checkout</Link>
      </div>
    );
  }
}

export default ShoppingCart;
