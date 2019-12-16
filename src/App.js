import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import LogInPage from './pages/login/login-page.component';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/shop' component={ ShopPage } />
        <Route exact path='/signin' component={ LogInPage } />
      </Switch>
    </div>
  );
}

export default App;
