import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../pages/ShoppingCart';
import SearchBar from '../components/SearchBar';
import * as api from '../services/api';
import ProductDisplay from '../components/ProductDisplay';
// import CartIcon from '../components/CartIcon';
import CategoryList from '../components/CategoryList';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: '',
      query: '',
      boxCheck: false,
      cartProducts: (localStorage.getItem('inCartAfterLoading')) ? JSON.parse(localStorage.getItem('inCartAfterLoading')) : [],
      count: 0,
      categories: [],
      productsList: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toCart = this.toCart.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((category) => {
      this.setState({ categories: category });
    });
    localStorage.setItem('inCartAfterLoading', (localStorage.getItem('inCart')) ?
    localStorage.getItem('inCart') :
    []
    );
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
    this.setState({ boxCheck: !boxCheck });
    if (!boxCheck) {
      this.setState({ categoryId: category });
    } else {
      this.setState({ categoryId: '' });
    }
    // --------- GAMBETA ------------
    await api.getProductsFromCategoryAndQuery(!boxCheck ? category : '', this.state.query)
      .then((data) => {
        sessionStorage.setItem('items', JSON.stringify(data.results));
        this.setState({ productsList: data.results });
      });
  }

  async toCart(product) {
    console.log(this.state.cartProducts)
    await this.setState({ cartProducts: [...this.state.cartProducts, product] });
    localStorage.setItem('inCart', JSON.stringify(this.state.cartProducts))
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
          {/* <CartIcon /> */}
          <div>
            <Link data-testid="shopping-cart-button" to="/shopping-cart">
            <img src="https://image.flaticon.com/icons/png/512/263/263142.png" alt="cart icon" style={{ width: '30px' }} />
            </Link>
          </div>
          <div>
            { sessionStorage.getItem('items') && JSON.parse(sessionStorage.getItem('items'))
              .map((i) => <ProductDisplay addCart={this.toCart} key={i.id} product={i} />) }
          </div>
          {/* <ShoppingCart /> */}
        </section>
      </section>
    );
  }
}

export default ProductList;
