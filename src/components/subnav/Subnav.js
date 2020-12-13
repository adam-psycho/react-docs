import React, { Component } from "react";
import './Subnav.scss';


const navItems = [
	{
		text: 'Home',
		href: '/home'
	},
	{
		text: 'Documentation',
		href: '#',
	},
	{
		text: 'Use Cases',
		href: '#',
	},
	{
		text: 'API Reference',
		href: '#',
	},
	{
		text: 'SDK & Tools',
		href: '#',
	},
	{
		text: 'Community',
		href: '#',
	},
	{
		text: 'Extend',
		href: '#',
	},
	{
		text: 'Voyagers',
		href: '#',
	},
]

class Subnav extends Component {

	render() {
		let items = [];
		let i = 0;
		for (let navItem of navItems) {
			items.push(
				<a key={i} href={navItem.href}>{navItem.text}</a>
			)
			++i;
		}
		return (
			<nav className="flex-row">
				<div>
					{items}
				</div>
			</nav>
		)
	}
}

export default Subnav;