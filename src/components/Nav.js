import React, { Component } from 'react'

export default class Nav extends Component {
	render() {
		return (
			<nav>
				<a id="#world-premiere">World Premiere</a>
				<a id="#the-composer-anchor">Composer</a>
				<a id="#story-anchor">Story</a>
				<a id="#cast-anchor">Cast</a>
				<a id="#songs-anchor">Songs</a>
			</nav>
		)
	}
}
