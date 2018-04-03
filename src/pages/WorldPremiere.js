import React, { Component } from 'react'

export default class WorldPremiere extends Component {
	render() {
		return (
			<div className="section" id="world-premiere">
				<div className="section-content">
					<h2>World Premiere</h2>
					<br />
					<p>When: Saturday, June 16 @ 7:00pm</p>
					<br />
					<p>
						Where: Grace Church, Morton, IL
						<button
							href=""
							onClick="window.open('https://goo.gl/maps/FzQxfbTKDS92')"
						>
							Directions
						</button>
					</p>
					<p>
						Free Admission. Donations will betaken to support Peoria Rescue
						Ministries (link to PRM webpage){' '}
					</p>
				</div>
			</div>
		)
	}
}
