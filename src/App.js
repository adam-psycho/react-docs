import React, { Component } from "react";
import Home from './components/Home/Home.js';
import DocPage from './components/DocPage/DocPage.js';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


const ROUTES = [
  {
    href: '/home',
    component: Home,
  },
  {
    href: '/docpage/:module/:section',
    component: DocPage,
  }
]

class App extends Component {

  render() {
    let routers = [];
    let i = 0;
    for (let route of ROUTES) {
      routers.push(<Route key={i} path={route.href} component={route.component} />);
      ++i;
    }
    return (
      <Router>
        <Switch>
          {routers}
           <Redirect from="*" to="/home" />
        </Switch>
      </Router>
    )
   } 
}

export default App;
