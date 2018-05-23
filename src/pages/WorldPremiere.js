import React, { Component } from 'react'

export default class WorldPremiere extends Component {
	openMap() {
		window.open('https://goo.gl/maps/FzQxfbTKDS92')
	}

	openPRM() {
		window.open('https://www.peoriarescue.org/')
	}

	openDonate() {
		window.open('http://www.mortonfinearts.org/ruth-musical-donate')
	}
	render() {
		return (
			<div className="section" id="world-premiere">
				<div className="section-content">
					<h2 id="world-premiere-title">World Premiere</h2>
					<hr />
					<p>When: Saturday, June 16 @ 7:00pm</p>
					<br />
					<p>
						Where: Grace Church, Morton, IL
						<button href="" onClick={this.openMap}>
							Directions
						</button>
					</p>
					<br />
					<p>
						Free Admission. Donations will betaken to support Peoria Rescue
						Ministries <button onClick={this.openPRM}>Peoria Rescue</button>
						<button onClick={this.openDonate}>Donate</button>
					</p>
				</div>
			</div>
		)
	}
}
