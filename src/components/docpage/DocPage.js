import React, { Component } from "react";
import m from '../../models/ApiModules.js';
import './DocPage.scss';
import Sidenav from '../sidenav/Sidenav.js';
import Subnav from '../subnav/Subnav.js';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';


class DocPage extends Component {

	render() {
		return (
			<div id="docpage">
				<Header />
				<Subnav />
				<div className="flex-row documentation">
					<Sidenav />
					<div>
						<p>Test</p>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default DocPage;