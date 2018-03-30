import React, { Component } from 'react'
import './App.css'

import Nav from './components/Nav'
import HeroSection from './pages/HeroSection'
import WorldPremiere from './pages/WorldPremiere'
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
				<WorldPremiere />
        <Composer />
        <Story />
        <Cast />
        <Songs />

			</div>
		)
	}
}

export default App
