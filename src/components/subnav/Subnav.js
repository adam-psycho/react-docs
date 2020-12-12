import React, { Component } from "react";
import './Subnav.scss';


const navItems = [
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
	{
		text: 'Vonage Dev TV',
		href: '#',
	}
]

class Subnav extends Component {

	render() {
		let items = [];
		for (let navItem of navItems) {
			items.push(
				<a href={navItem.href}>{navItem.text}</a>
			)
		}
		return (
			<nav className="flex-row">
				{items}
			</nav>
		)
	}
}

export default Subnav;