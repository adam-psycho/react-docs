import React, { Component } from "react";
import m from '../../models/ApiModules.js';
import './Sidenav.scss';


class Sidenav extends Component {

	render() {
		let modules = [];
		for (let module of m.modules) {
			let sections = [];
			for (let section of module.sections) {
				sections.push(
					<li className="section">
						<span>{section.name}</span>
					</li>
				)
			}
			modules.push(
				<li className="module">
					<span><i className={'fa fa-' + module.icon}></i>{module.name}<i class="fa fa-angle-down" aria-hidden="true"></i></span>
					<ul className="sections">
						{sections}
					</ul>
				</li>
			)
		}
		return (
			<div className="sidenav">
				<ul className="modules">
					{modules}
				</ul>
			</div>
		)
	}
}

export default Sidenav;