import React from 'react';
import { Link } from 'react-router-dom';

class ProductDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: this.props.product, inCart: [] };
  }

  render() {
    const { id, title, price, thumbnail } = this.props.product;
    return (
      <div data-testid="product">
        <img src={thumbnail} alt={title} />
        <h4 data-testid="shopping-cart-product-name">{title}</h4>
        <p>{id}</p>
        <p>{`R$ ${price}`}</p>
        <button
          onClick={() => this.props.addCart(this.state.product)}
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
        <Link data-testid="product-detail-link" to={`/product/${id}`}>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

export default ProductDisplay;
