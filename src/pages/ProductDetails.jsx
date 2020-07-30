import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: JSON.parse(sessionStorage.getItem('items'))
      .filter((item) => item.id === this.props.match.params.id)[0],
    };
  }

  // toCart() {
  //   Desenvolver essa função para adicionar o item detalhado ao carrinho
  // }

  render() {
    const { cartProducts } = this.state;

    return (
      <div>
        <div data-testid="product-detail-name">
          <img src={cartProducts.thumbnail} alt={cartProducts.title} />
          <h1>{cartProducts.title}</h1>
          <p>{cartProducts.id}</p>
        </div>
        <div>
          <form>
            <textarea data-testid="product-detail-evaluation" placeholder="Review" />
            <button type="button" data-testid="product-detail-add-to-cart">
              Adicionar ao carrinho
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
