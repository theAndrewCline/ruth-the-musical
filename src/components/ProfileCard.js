import React, { Component } from 'react'

export default class ProfileCard extends Component {
	render() {
        const {name, title, picture, bio } = this.props
		return (
			<div class="profile-card">
				<div class="profile-card__header">
					<h3>{name}</h3>
					<h4>{title}</h4>
				</div>
				<img
					src={picture}
					alt={name}
					class="profile-image"
				/>
				<div class="profile-card__content">
                    <p>{bio}</p>
                </div>
			</div>
		)
	}
}
