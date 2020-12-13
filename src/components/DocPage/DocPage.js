import React, { Component } from "react";
import m from '../../models/ApiModules.js';
import './DocPage.scss';
import Sidenav from '../Sidenav/Sidenav.js';
import Subnav from '../Subnav/Subnav.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { withRouter } from "react-router-dom";


class DocPage extends Component {
	componentDidMount() {
        this.module = this.props.match.params.module;
        console.log('module', this.module);
    }
    fetchData = id => {
        // ...
    };
	render() {
		let module = m.modules.find(x => x.id === this.props.match.params.module);
		let section = module.sections.find(x => x.id === this.props.match.params.section);
		var MyComponent = section.component;
		return (
			<div id="docpage">
				<div id="fixed-header">
					<Header />
					<Subnav />
				</div>
				<div className="flex-row documentation wide-container">
					<Sidenav />
					<div>
						<p>Module: {this.props.match.params.module}</p>
						<p>Section: {this.props.match.params.section}</p>
						{ MyComponent && <MyComponent /> }
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default withRouter(DocPage);