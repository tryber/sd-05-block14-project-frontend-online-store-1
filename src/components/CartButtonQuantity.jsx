import React from 'react';

export default function CartButton(props) {
  return (
    <div className="button-quantity">
      <button
        onClick={props.subtractQuantity}
        data-testid="product-decrease-quantity"
      >-</button>
      <h4 data-testid="shopping-cart-product-quantity">{props.counter}</h4>
      <button
        onClick={props.addQuantity}
        data-testid="product-increase-quantity"
      >+</button>
    </div>
  );
}
