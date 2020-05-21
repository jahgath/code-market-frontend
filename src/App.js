import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/home';
import InitialPage from './components/initialPage';
import Login from './components/login';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={InitialPage} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
