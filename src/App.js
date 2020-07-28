import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/product/:id" render={(props) => <ProductDetails {...props} />} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route exact path="/">
            <ProductList />
            <ShoppingCart />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
