import React, { Component } from 'react'

import ProfileCard from '../components/ProfileCard'

export default class Cast extends Component {
	constructor(props) {
		super(props)

		this.state = {
			cast: [
				{
					name: 'Phil Witzig',
					title: 'Assistant Music Director / Conductor',
					picture: './assets/phil-witzig.jpg',
					bio:
						'Phil holds a lay position in music ministry at the Apostolic Christian Church of Morton. He first studied music as a percussionist and later sang tenor in the Morton High School choral program was twice an Illinois All-State Choir member.  Phil studied business at Illinois Central College, and completed a bachelor/’s in business administration at Illinois State University.  Along the way, he sang tenor with the ICC Chamber Singers, the ICC Philharmonic Choral and the Illinois State University Madrigals. At ISU he studied voice with Peter Schuetz and toured Europe with the ISU Madrigal Singers under the direction of Dr. John Ferrell.  After graduating from Illinois State he joined his family/’s clothing business. During this time he joined the Peoria Civic Opera Company chorus where he sang in six full-length productions on the stage of the Peoria Civic Center Theater. Phil has sung for the past four years under the direction of Dr. Joe Henry in the Peoria Area Civic Chorale, and recently sang tenor with the Heartland Festival in productions of Carmina Burana and Beethoven/’s Ninth. Alongside his current career as IT Manager at Kuhl Insurance Agency in Morton, he maintains a busy private life in choral conducting.  Inspired as a young man by the dynamic conducting of his first band director, Rudolph Jungst, Phil began conducting church choirs soon after college. Now in his 30th year conducting the men/’s choir The Mortonaires, Phil has also conducted many church and civic choral groups. His conducting work is preserved on more than sixteen recording projects available on CD, including four recordings with the National Apostolic Christian Men/’s Choir.  For the past six years Phil has conducted the Morton Community Chorus & Orchestra in their annual performance of Handel/’s Messiah.'
				},
				{
					name: 'Courtney Huffman-Frye',
					title: 'Ruth',
					picuture: './assets/courtney-huffman-frye.jpg',
					bio:
						'After taking First Place in the coveted NATS Artist Award Competition in Nashville, Tennessee, soprano Courtney Huffman made her New York solo recital debut at Carnegie Hall. About Courtney\'s performance in Long Beach Opera\'s U.S. Premiere of Vivaldi’s Motezuma, Mark Swed with the LA Times wrote, "Teutile…brilliantly sung by a young soprano, Courtney Huffman, just entering the professional arena, is treated as a supercilious young starlet…She sings and steals the stage…I hope opera talent scouts were on hand." Her stage credits include Yadwiga in Ben Moore’s Enemies, A Love Story, Violetta in La Traviata, Betty in Lowell Liebermann’s Miss Lonelyhearts, Frasquita in Carmen, and Zerlina in Don Giovanni. An equally accomplished concert artist, Ms. Huffman has been a featured soloist with Boston Baroque, performing the role of Amor in a semi-staged version of Gluck’s Orfeo ed Euridice, and appearing as the soprano soloist in Bach’s Wedding Cantata and Coffee Cantata. Her love for recital work has taken her all over the world, including a ten-day concert tour throughout Southern China, and her passion for contemporary music has given her the opportunity to work with and premiere pieces by many distinguished composers such as Alan Chan, Lori Laitman, Ben Moore, Timothy Takach, and Marc-André Dalbavie. On faculty at Gordon College from 2013 to 2017, Ms. Huffman was a frequent performer on its Faculty Artist Series and presented works by a variety of composers with her fellow colleagues. New to the voice faculty at Bradley University, this past fall she joined cellist Barbara Hedlund, violinist Seul Lee, and Bradley faculty pianist Chee Hyeon Choi for a program featuring arrangements of a Bach cantata, Mozart aria, and Strauss Lied for soprano and piano trio. Huffman is passionate about teaching the next generation of singing actors and currently serves on the voice faculty of Bradley University in Peoria, IL.'
				},
				{
					name: 'Alison Richter-Meuth',
					title: 'Naomi',
					picture: './assets/alison-richter-meuth.jpg',
					bio:
						'Soprano Alison Meuth has spent the last fifteen years singing opera at the professional level.  Some of her favorite roles include Liu in Turandot, Tosca, Suor Angelica, The Mother in Amahl and the Night Visitors,  Donna Elvira in Don Giovanni, Sarah Good in The Crucible, Santuzza in Cavalleria Rusticana and Soprano Soloist in Verdi’s Requiem to name a few.  She spent several years as a member of The Opera Illinois Young Artist’s Program where she taught people in the community about opera by performing concerts and opera scenes. Alison has had the privilege of working with Sarasota Opera, Utah Festival Opera,  Annapolis Opera, Galesburg Community Chorus, Saint Martin Chamber Players, Bradley University New Music Faculty Ensemble and Opera Illinois. Alison is married to her ever supportive husband Jeremy.  Together they homeschool their three children.  Alison is passionate about The Charlotte Mason Method.  She uses the method as she teaches her own children and her college students at Knox College.  At Knox Alison teaches private lessons and Vocal Pedagogy as well as directs their opera program.  Alison also conducts The Peoria Cooperative Academy’s Homeschool Choir, Madrigal Singers and Musical Theater Troupe.  Alison loves to use her gifts to glorify God.  She also directs The Chancel Choir for The First Presbyterian Church Of Galesburg Illinois.'
				},
				{
					name: 'Steve Williams',
					title: 'Boaz',
					picture: './assets/steve-williams.jpg',
					bio: ''
				},
				{
					name: 'Doug Habegger',
					title: 'Narrator',
					picutre: './assets/doug-habegger.jpg',
					bio: ''
				}
			]
		}
	}
	render() {
		const { cast } = this.state

		return (
			<div className="section" id="cast">
				<div className="section-content">
					<h2>Cast</h2>
					<a id="cast-anchor" />
					{cast.map(x => (
						<ProfileCard
							name={x.name}
							title={x.title}
							picture={x.picture}
							bio={x.bio}
						/>
					))}
				</div>
			</div>
		)
	}
}
