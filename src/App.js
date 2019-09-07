import React from 'react';
import './App.css';
import { Route, Link, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
const Hats = () => (
  <div>
    <h1>Hats</h1>
  </div>

)
function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
