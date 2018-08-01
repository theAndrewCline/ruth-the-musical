import React, { Component } from 'react'
import './App.css'

import Nav from './components/Nav'
import HeroSection from './pages/HeroSection'
import NextShow from './pages/NextShow'
import Composer from './pages/Composer'
import Story from './pages/Story'
import Cast from './pages/Cast'
import Songs from './pages/Songs'

class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<HeroSection />
				<NextShow />
				<Story />
				<Composer />
				<Cast />
				<Songs />
			</div>
		)
	}
}

export default App
