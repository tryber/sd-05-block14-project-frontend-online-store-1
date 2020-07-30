import React from 'react';

import * as api from '../services/api';

import SearchBar from '../components/SearchBar';
import ProductDisplay from '../components/ProductDisplay';
import CategoryList from '../components/CategoryList';
import CartIcon from '../components/CartIcon';
// import ShoppingCart from './ShoppingCart';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: '',
      query: '',
      boxCheck: false,
      cartProducts: (localStorage.getItem('inCartAfterLoading')) ? JSON.parse(localStorage.getItem('inCartAfterLoading')) : [],
      cartSize: 0,
      categories: [],
      productsList: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toCart = this.toCart.bind(this);
    this.getCartSize = this.getCartSize.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((category) => {
      this.setState({ categories: category });
    });
    localStorage.setItem('inCartAfterLoading', (localStorage.getItem('inCart')) ?
    localStorage.getItem('inCart') :
    [],
    );
  }

  getCartSize() {
    const { cartProducts } = this.state;
    this.setState({ cartSize: cartProducts.length });
  }

  async handleClick(input) {
    await api.getProductsFromCategoryAndQuery(this.state.categoryId, input)
      .then((data) => {
        sessionStorage.setItem('items', JSON.stringify(data.results));
        this.setState({
          productsList: data.results,
          query: input,
        });
      });
  }

  async handleChange(category) {
    const { boxCheck } = this.state;
    await this.setState({ categoryId: category });
    if (!boxCheck) {
      this.setState({ boxCheck: !boxCheck });
    } else {
      this.setState({ categoryId: '' });
    }
    await api.getProductsFromCategoryAndQuery(!boxCheck ? category : '', this.state.query)
      .then((data) => {
        sessionStorage.setItem('items', JSON.stringify(data.results));
        this.setState({ productsList: data.results });
      });
  }

  async toCart(product) {
    const { cartProducts } = this.state;
    await this.setState({ cartProducts: [...cartProducts, product] });
    localStorage.setItem('inCart', JSON.stringify(this.state.cartProducts));
    this.getCartSize();
  }

  render() {
    return (
      <section>
        <CategoryList categories={this.state.categories} handleChange={this.handleChange} />
        <section className="products-container">
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <SearchBar onClick={this.handleClick} />
          <CartIcon cartSize={this.state.cartSize} />
          <div>
            { sessionStorage.getItem('items') && JSON.parse(sessionStorage.getItem('items'))
              .map((item) =>
                <ProductDisplay addCart={this.toCart} key={item.id} product={item} />) }
          </div>
          {/* <ShoppingCart /> */}
        </section>
      </section>
    );
  }
}

export default ProductList;
