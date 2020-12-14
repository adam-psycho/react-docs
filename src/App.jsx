import React, { Component } from "react";
import Home from './components/Home/Home';
import DocPage from './components/DocPage/DocPage';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";



class App extends Component {

  render() {
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
