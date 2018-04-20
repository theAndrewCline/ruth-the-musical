import React, { Component } from 'react'

export default class Nav extends Component {
	constructor(props) {
		super(props)

		this.state = {
			navToggle: 'INACTIVE'
		}

		this.mobileMenu = this.mobileMenu.bind(this)
	}
	scrolling(event) {
		let destinationId = event.target.getAttribute('id')
		let destination = document.querySelector(destinationId)

		destination.scrollIntoView({ behavior: 'smooth' })
	}

	mobileMenu() {
		if (this.state.navToggle === 'INACTIVE') {
			this.setState(prev => ({ navToggle: 'ACTIVE' }))
		} else {
			this.setState(prev => ({ navToggle: 'INACTIVE' }))
		}
	}

	render() {
		let className = 'menu-button'
		if (this.state.navToggle === 'ACTIVE') {
			className = 'nav-list_active'
		} else {
			className = 'nav-list'
		}

		return (
			<nav>
				<h4 className="mobile-menu-button" onClick={this.mobileMenu}>
					Menu
				</h4>
				<ul className={className}>
					<li onClick={this.scrolling} id="#world-premiere-title">
						World Premiere
					</li>
					<li onClick={this.scrolling} id="#story-title">
						Story
					</li>
					<li onClick={this.scrolling} id="#composer-title">
						Composer
					</li>
					<li onClick={this.scrolling} id="#cast-title">
						Cast
					</li>
					<li onClick={this.scrolling} id="#songs-title">
						Songs
					</li>
				</ul>
			</nav>
		)
	}
}
