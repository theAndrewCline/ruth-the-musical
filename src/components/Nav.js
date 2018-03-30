import React, { Component } from 'react'

export default class Nav extends Component {
	constructor(props) {
		super(props)
	}

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
				<a onClick={this.scrolling} id="#the-composer-anchor">
					Composer
				</a>
				<a onClick={this.scrolling} id="#story-anchor">
					Story
				</a>
				<a onClick={this.scrolling} id="#cast-anchor">
					Cast
				</a>
				<a onClick={this.scrolling} id="#songs-anchor">
					Songs
				</a>
			</nav>
		)
	}
}
