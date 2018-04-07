import React, { Component } from 'react'

export default class Nav extends Component {
	scrolling(event) {
		let destinationId = event.target.getAttribute('id')
		let destination = document.querySelector(destinationId)

		destination.scrollIntoView({ behavior: 'smooth' })
	}

	render() {
		return (
			<nav>
				<ul className="nav-list">
					<li onClick={this.scrolling} id="#world-premiere">
						World Premiere
					</li>
					<li onClick={this.scrolling} id="#the-composer">
						Composer
					</li>
					<li onClick={this.scrolling} id="#story">
						Story
					</li>
					<li onClick={this.scrolling} id="#cast">
						Cast
					</li>
					<li onClick={this.scrolling} id="#songs">
						Songs
					</li>
				</ul>
			</nav>
		)
	}
}
