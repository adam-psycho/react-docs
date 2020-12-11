import React, { Component } from "react";
import m from './models/ApiModules.js';
import './App.scss';


class App extends Component {

  constructor() {
    super();
    this.subtitleMapping = {
      'symbl-sdk': 'Send and Recieve',
      'telephony': 'Programmable',
      'web-socket': 'Programmable',
      'async': 'User Authentication',
      'conversation': 'Number Insight',
      'experience': 'Programmable Conversations',
    }
    this.listItems = [
      'symbl-sdk',
      'telephony',
      'web-socket',
      'async',
      'conversation',
      'experience',
    ]
    this.cardItems = [
      'testing',
      'error',
    ]
    
  }

  listItem() {
    let listItems = m.modules.filter(x => this.listItems.indexOf(x.id) !== -1);
    let items = [];
    for (let item of listItems) {
      items.push(
        <li class="list-item">
          <div>
            <div class="list-content">
              <span>Icon</span>
              <span class="subtitle">{this.subtitleMapping[item.id]}</span>
              <h3 class="title">{item.name}</h3>
              <div class="sub-sections">
                <a href="#">Overview</a>
                <a href="#">Guides</a>
                <a href="#">Code Snippets</a>
                <a href="#">Tutorials</a>
              </div>
              <hr />
              <div class="list-footer">
                <a href="#">API Reference</a>
                <a href="#">Another Reference</a>
              </div>
            </div>
          </div>
        </li>
      )
    }
    return <ul class="list-items">
      {items}
    </ul>
  }

   render() {
    return (
      <div class="container">
        <div class="content">
          {this.listItem()}
        </div>
      </div>
    )
   } 
}

export default App;
