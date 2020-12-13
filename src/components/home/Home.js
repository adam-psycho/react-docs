import React, { Component } from "react";
import m from '../../models/ApiModules.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Subnav from '../Subnav/Subnav.js';
import './Home.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


const SUBTITLE_MAPPING = {
  'symbl-sdk': 'Send and Recieve',
  'telephony': 'Programmable',
  'web-socket': 'Programmable',
  'async': 'User Authentication',
  'conversation': 'Number Insight',
  'experience': 'Programmable Conversations',
  'item-1': 'Subtitle',
  'item-2': 'Subtitle',
}

class Home extends Component {

  constructor() {
    super();
    this.listItems = [
      'symbl-sdk',
      'telephony',
      'web-socket',
      'async',
      'conversation',
      'experience',
    ]
    this.cardItems = [
      {
        icon: 'code',
        title: 'Messages and Dispatch',
        subtitle: 'Integrate with various communication channels including Facebook Messenger, WhatsApp and Viber with failover',
        modules: ['item-1', 'item-2']
      },
    ]
    
  }

  listItem(listItems) {
    let items = [];
    for (let item of listItems) {
      items.push(
        <li className="list-item">
          <div>
            <div className="list-content">
              <i className={"fa fa-" + item.icon}></i>
              <span className="list-subtitle">{SUBTITLE_MAPPING[item.id]}</span>
              <h3 className="list-title">{item.name}</h3>
              <div className="sub-sections flex-row">
                <a href={`/docpage/${item.id}/overview`}><i className="fa fa-home"></i>Overview</a>
                <a href={`/docpage/${item.id}/guides`}><i className="fa fa-book"></i>Guides</a>
                <a href={`/docpage/${item.id}/code-snippets`}><i className="fa fa-code"></i>Code Snippets</a>
                <a href={`/docpage/${item.id}/tutorials`}><i className="fa fa-info"></i>Tutorials</a>
              </div>
              <hr />
              <div className="list-footer flex-row">
                <a href="/docpage/">API Reference</a>
                <a href="/docpage/">Another Reference</a>
              </div>
            </div>
          </div>
        </li>
      )
    }
    return <ul className="flex-row list-items">
      {items}
    </ul>
  }

  cardSection() {
    let items = [];
    for (let cardItem of this.cardItems) {
      let modules = m.modules.filter(x => cardItem.modules.indexOf(x.id) !== -1);
      items.push(
        <div className="card-section">
          <i className={"fa fa-" + cardItem.icon}></i>
          <h3 className="page-subtitle">{cardItem.title}</h3>
          <p className="page-subtext">{cardItem.subtitle}</p>
          {this.listItem(modules)}
        </div>
      )
    }
    return items;
  }

   render() {
    let modules = m.modules.filter(x => this.listItems.indexOf(x.id) !== -1);
    return (
      <div>
        <div id="fixed-header">
          <Header />
          <Subnav />
        </div>
        <div className="container">
          <div className="content">
            <h1 className="page-title">Symbl API Developer</h1>
            <p className="page-subtext">Everything you need to build connected appliactions with Symbl APIs</p>
            {this.listItem(modules)}
            {this.cardSection()}
          </div>
        </div>
        <Footer />
      </div>
    )
   } 
}

export default Home;
