import React, { Component } from 'react'

export default class ProfileCard extends Component {
	render() {
		const { name, title, picture, bio } = this.props
		return (
			<div className="profile-card">
				<div className="profile-card__header">
					<img src={picture} alt={name} class="profile-image" />
				</div>
				<div className="profile-card__content">
					<h3>{name}</h3>
					<h4>{title}</h4>
					<p>{bio}</p>
				</div>
			</div>
		)
	}
}
