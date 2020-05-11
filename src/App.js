import React from 'react';
import HomePage from './pages/homepage.component';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div >
      <Switch>
      <Route path='/shop/hats'>
          <HatsPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
     </Switch>
    </div>
  );
}

export default App;
