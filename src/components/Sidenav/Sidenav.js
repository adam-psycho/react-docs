import React, { Component } from "react";
import ApiModules from '../../models/ApiModules.js';
import './Sidenav.scss';
import {
  NavLink
} from "react-router-dom";


class Sidenav extends Component {

  constructor(props) {
    super();
    this.state = {
      opened: false,
    }
  }

  componentDidMount() {
    let activeLink = document.querySelector("a.active");
    if (activeLink) {
      this.toggleAccordion({target: activeLink.closest('.module')});
    }
  }

  toggleAccordion(e) {
    if (e.target.closest('.sections')) { return }
    let target = e.target.closest('li.module');
    let wrapper = target.querySelector('.module-name-wrapper');
    if (target && wrapper) {
      let activeWrapper = document.querySelector('.module-name-wrapper.active');
      if (activeWrapper) {
        let icon = activeWrapper.querySelector('.fa.trigger');
        let sections = activeWrapper.closest('.module').querySelector('.sections');
        if (sections) {
          activeWrapper.classList.remove('active');
          icon.classList.toggle('fa-angle-down');
          icon.classList.toggle('fa-angle-up');
          sections.style.maxHeight = `0px`;
        }
      }
      wrapper.classList.toggle('active');
      let sections = target.querySelector('.sections');
      if (sections) {
        let icon = wrapper.querySelector('.fa.trigger');
        icon.classList.toggle('fa-angle-up');
        icon.classList.toggle('fa-angle-down');
        sections.style.maxHeight = `${sections.scrollHeight}px`;
      }
    }
  }

  createList()  {
    let modules = [];
    let i = 0;
    for (let module of ApiModules.modules) {
      let sections = [];
      let j = 0;
      for (let section of module.sections) {
        sections.push(
          <li className="section" key={j}>
            <NavLink activeClassName='active' to={`/docpage/${module.id}/${section.id}`}><span>{section.name}</span></NavLink>
          </li>
        )
        j++;
      }
      modules.push(
        <li className={`module`} onClick={(e) => {this.toggleAccordion(e)}} key={i}>
          <div className="module-name-wrapper" id={'module-' + i}>
            <span><i className={'fa fa-' + module.icon}></i>{module.name}<i className="trigger fa fa-angle-down" aria-hidden="true"></i></span>
          </div>
          <ul className="sections">
            {sections}
          </ul>
        </li>
      )
      ++i;
    }
    return modules;
  }

  toggleSidenav(e, state) {
    let sidenav = document.querySelector('.sidenav');
    if (sidenav) {
      if (state.opened) {
        sidenav.style.left = `-${sidenav.clientWidth}px`;
      } else {
        sidenav.style.left = '0px';
      }
    }
    console.log(state);
    this.setState({opened: !state.opened});
    // this.setState((state) => {
    //   return {opened: !state.opened}
    // });
  }


  render() {
    return (
      <div>
      <i className="fa fa-bars" aria-hidden="true" onClick={(e) => {this.toggleSidenav(e, this.state)}}></i>
      <div className="sidenav">
        <ul className="modules">
          {this.createList()}
        </ul>
      </div>
      </div>
    )
  }
}

export default Sidenav;