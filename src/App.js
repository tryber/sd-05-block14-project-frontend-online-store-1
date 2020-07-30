import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/product/:id" render={(props) => <ProductDetails {...props} />} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/checkout" render={(props) => <Checkout {...props} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
