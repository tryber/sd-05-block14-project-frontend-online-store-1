import React from 'react';
import { Link } from 'react-router-dom';

class ProductDisplay extends React.Component {
  render() {
    const { id, title, price, thumbnail } = this.props.product;
    return (
      <div data-testid="product">
        <img src={thumbnail} alt={title} />
        <h4>{title}</h4>
        <p>{id}</p>
        <p>{`R$ ${price}`}</p>
        <Link data-testid="product-detail-link" to={`/product/${id}`} >VER DETALHES</Link>
      </div>
    );
  }
}

export default ProductDisplay;
