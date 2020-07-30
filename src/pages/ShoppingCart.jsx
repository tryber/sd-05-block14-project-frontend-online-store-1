import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        {!localStorage.getItem('inCart') && <section data-testid="shopping-cart-empty-message" className="cart-container">
          Seu carrinho está vazio
        </section>}
        <div>
          {localStorage.getItem('inCart') &&
          JSON.parse(localStorage.getItem('inCart')).map((item) => (
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
