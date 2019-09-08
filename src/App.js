import React from 'react';
import './App.css';
import { Route, Link, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
const Hats = () => (
  <div>
    <h1>Hats</h1>
  </div>

)
function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
