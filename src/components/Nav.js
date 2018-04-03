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
				<a onClick={this.scrolling} id="#world-premiere">
					World Premiere
				</a>
				<a onClick={this.scrolling} id="#the-composer">
					Composer
				</a>
				<a onClick={this.scrolling} id="#story">
					Story
				</a>
				<a onClick={this.scrolling} id="#cast">
					Cast
				</a>
				<a onClick={this.scrolling} id="#songs">
					Songs
				</a>
			</nav>
		)
	}
}
