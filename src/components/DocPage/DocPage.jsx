import React, { Component } from "react";
import ApiModules from '../../models/ApiModules.js';
import './DocPage.scss';
import Sidenav from '../Sidenav/Sidenav';
import Subnav from '../Subnav/Subnav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { withRouter } from "react-router-dom";


class DocPage extends Component {
    componentDidMount() {
        console.log('module', this.props.match.params.module);
    }
    render() {
        let module = ApiModules.modules.find(x => x.id === this.props.match.params.module);
        let section = module.sections.find(x => x.id === this.props.match.params.section);
        let SectionComponent = section.component;
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
                        { SectionComponent && <SectionComponent /> }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(DocPage);