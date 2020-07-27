import React from 'react';
import SearchBar from '../components/SearchBar';
import * as api from '../services/api';
import ProductDisplay from '../components/ProductDisplay';  

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: '',
      query: '',
    };
  }

  handleClick = async (batatinha) => {
    await api.getProductsFromCategoryAndQuery(this.state.categoryId, batatinha)
      .then((data) => {
        sessionStorage.setItem('items', JSON.stringify(data.results));
      });
    this.setState({
      query: batatinha,
    });
  }

  render() {
    return (
      <section>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <SearchBar onClick={this.handleClick} />
        <div>
          { sessionStorage.getItem('items') && JSON.parse (sessionStorage.getItem('items'))
          .map(item => <ProductDisplay batatinha={item.id}  product={item} />) }
        </div>
      </section>
    );
  }
}

export default ProductList;
