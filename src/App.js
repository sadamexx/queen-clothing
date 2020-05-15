import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component.js';
import Header from './components/header/header.component';

function App() {
  return (
    <div >
      <Header />
      <Switch>
      <Route path='/shop'>
          <ShopPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
     </Switch>
    </div>
  );
}

export default App;
