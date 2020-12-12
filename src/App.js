import React, { Component } from "react";
import Home from './components/home/Home.js';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


const ROUTES = [
  {
    href: '/',
    component: Home,
  }
]

class App extends Component {

  render() {
    let routers = [];
    for (let route of ROUTES) {
      routers.push(<Route path={route.href} component={route.component} />);
    }
    return (
      <Router>
        <Switch>
          {routers}
        </Switch>
      </Router>
    )
   } 
}

export default App;
