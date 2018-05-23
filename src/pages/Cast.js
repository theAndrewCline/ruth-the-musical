import React, { Component } from 'react'

import ProfileCard from '../components/ProfileCard'

export default class Cast extends Component {
	constructor(props) {
		super(props)

		this.state = {
			cast: [
				{
					name: 'Courtney Huffman',
					title: 'Ruth',
					picture: './assets/courtney-huffman-frye.jpg',
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
					bio: `Stephen Williams, baritone, is a self-employed contractor and custom builder with
					a bachelors degree in engineering from Bradley University. As a Bradley student,
					Steve sang with the Bradley Chorale and Community Chorus. He studied voice
					with the late Dr. John Davis of Bradley University and now studies with Jerry
					Siena of the University of Illinois at Champaign – Urbana. He has served as
					Pontifical Cantor at The Cathedral of Saint Mary of the Immaculate Conception in
					Peoria from 2000 to present. Steve was awarded both honorable mention in 2000
					and first prize winner in 2002 in the adult division of the NATS (National
					Association of Teachers of Singers) competitions. Steve has been a repeat
					soloist with Saint Martin Chamber Group and Chamber Players, Dramatic
					Crossroads, and Bradley Community Chorus. He has performed the baritone
					arias in oratorios including multiple productions of Handel’s Messiah,
					Mendelson’s Elijah, and Faure’s Requiem. Steve has performed excerpts of
					several operas including those of Le Nozze Di Figaro, Don Giovanni, Die
					Zauberflote, Il Barbiere Di Siviglia, Rigoletto, La Traviata, Pearl Fishers, and
					played the lead role in Menotti’s “The Telephone”.`
				},
				{
					name: 'Phil Witzig',
					title: 'Assistant Music Director / Conductor',
					picture: './assets/phil-witzig.jpg',
					bio: `Phil’s holds a lay position in music ministry at the Apostolic Christian Church of Morton. Phil
					graduated from Illinois State University with a Bachelor’s Degree in Business Administration.
					Despite his concentration on business in school, music was never far away. In High School, he
					was twice an IMEA All-State Honors Choir member. At ISU, he sang with the elite Madrigal
					Singers ensemble under Dr. John Farrell and studied voice with Peter Schuetz. After college, he
					began a career at his family’s clothing business. During this time, he joined the Peoria Civic
					Opera chorus singing tenor in productions of Aida, Carmen, Il trovatore, Merry Widow, Faust,
					and La Traviata. Phil currently sings with the Peoria Area Civic Chorale, and recently
					collaborated with the Heartland Festival Orchestra in performances of Carmina Burana and
					Beethoven’s Ninth Symphony. Inspired as a young man by the dynamic conducting of his first
					band director, Rudolph Jungst, Phil began conducting church choirs soon after college. Now in
					his 30 th year conducting the men’s choir, The Mortonaires, Phil has also conducted many church
					and civic choral groups. His conducting work is preserved on more than sixteen recording
					projects, including four with the Apostolic Christian Church national Men’s Choir. For the past
					six years, Phil has conducted the Morton Community Chorus &amp; Orchestra in their annual
					performance of Handel’s Messiah. Phil exercises his God-given musical talent aside his
					supportive wife, Cindi, and his current occupation as IT Director at Kuhl Insurance Agency. Phil
					and Cindi are parents to three beautiful daughters and eight grandchildren.`
				}
			]
		}
	}
	render() {
		const { cast } = this.state

		return (
			<div className="section" id="cast">
				<div className="section-content">
					<h2 id="cast-title">Cast</h2>
					<br />
					{cast.map(x => (
						<ProfileCard
							key={x.name}
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
