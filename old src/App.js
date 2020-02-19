import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'


 
function App() {
  return (
    <div>
      <Route  exact path='/' component={HomePage}></Route>
      <Route  exact path='/shop' component={ShopPage}></Route> 

    </div>
  );
}

export default App;