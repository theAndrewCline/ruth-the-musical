import React, { Component } from 'react'
import ProfileCard from '../components/ProfileCard'
export default class Composer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			composer: {
				name: 'David Getz',
				title: 'Composer',
				picture: './assets/david-getz.jpg',
				bio: ` I have been composing for nearly my whole life.
						As a young kid taking piano lessons, I would often improvise on my assigned piano lessons,
						and through that process, I began to dabble in writing my own pieces.
						As I grew up, I became more and more interested in music theory and how that skill specifically helped me as a composer.
						When I was 14, my parents bought me a MIDI keyboard that connected to
						software on my computer that enabled me to compose at a much quicker
						pace. I would spend hours at a time at my computer writing my own
						pieces and arranging my favorite works for different
						instrumentation.

						It wasn’t until I attended Illinois Wesleyan’s Summer Composition
						Institute my senior year of high school that I understood the
						transformative power that comes from writing music for other human
						beings. The piano, clarinet, and cello trio that I wrote that summer
						took my musicianship to new heights, and I spent the next four years
						at that University continuing to explore the world of composition.
						My senior recital featured my first piano sonata as well as a brass
						quintet. Though I was studying to be a music teacher, I knew that I
						would be writing music the rest of my life.

						During my junior year of college, I sketched the first song for
						“Ruth: The Musical,” though, at the time, I had no concept of this
						show as a whole. It was while listening to Doug Habegger preach from
						the book of Ruth that I was taken by the emotional turmoil
						Elilmelech must have undergone during his decision to uproot his
						family from the Promised Land and move to Moab. I penned a few
						lyrics on my bulletin and thought, “I wonder if this story would
						make for a good musical?” Over the next seven years, this idea never
						died and I worked at the blistering pace of writing one or two songs
						a year. Even though I liked the concept, the idea of the show ever
						culminating in a performance remained a pipe dream.

						An event in the fall of 2017 served as the catalyst that inspired me
						to finish writing the show. In September of 2017, I performed in the
						company of my first musical theater production, Peoria Player’s
						production of “The Hunchback of Notre Dame.” The process of seeing a
						group of incredibly talented people all coming together for the sake
						of communicating a story to an audience was powerful and
						transforming. While I had always enjoyed musical theater as a
						consumer, I now saw its ability to serve from the other side of the
						stage, and I realized that the story of Ruth is one that everyone
						needs to hear.

						I made it a goal to finish the show by the end of the year, and by
						January 1, 2018, I had written every song but the finale. I went to
						work putting together a creative team to put on the show, and I was
						continually humbled by the incredible people who not only agreed to
						help, but did so with enthusiasm and eagerness. The show was
						completed in March of 2018, and the rehearsal process began that
						same month. I cannot believe how this process all came together, and
						I can’t wait for you all to see the show! - David Getz `
			}
		}
	}

	render() {
		const { name, bio, title, picture } = this.state.composer
		return (
			<div className="section" id="the-composer">
				<div className="section-content">
					<h2 id="composer-title">Composer</h2>
					<ProfileCard
						name={name}
						bio={bio}
						title={title}
						picture={picture}
					/>
				</div>
			</div>
		)
	}
}
