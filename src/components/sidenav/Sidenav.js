import React, { Component, useState, useRef, useEffect } from "react";
import m from '../../models/ApiModules.js';
import './Sidenav.scss';
import {
  NavLink
} from "react-router-dom";


class Sidenav extends Component {

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
    for (let module of m.modules) {
      let sections = [];
      for (let section of module.sections) {
        sections.push(
          <li className="section">
            <NavLink activeClassName='active' to={`/docpage/${module.id}/${section.id}`}><span>{section.name}</span></NavLink>
          </li>
        )
      }
      modules.push(
        <li className={`module`} onClick={(e) => {this.toggleAccordion(e)}}>
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
  render() {
  	return (
  		<div className="sidenav">
  			<ul className="modules">
  				{this.createList()}
  			</ul>
  		</div>
  	)
  }
}

export default Sidenav;