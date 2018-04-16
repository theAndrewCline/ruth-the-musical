import React, { Component } from 'react'

export default class Story extends Component {

	openBibleStory() {
		window.open('https://www.bible.com/bible/59/RUT.1.ESV')
	}

	render() {
		return (
			<div className="section" id="story">
				<div className="section-content section-content__center section-content__whiteBackground">
					<h2>Story</h2>
					<hr />

					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="150"
						height="150"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="feather feather-book-open"
					>
						<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
						<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
					</svg>
					<h3>Synopsis</h3>
					<br />
					<p>
						A man left Bethlehem and took his family to Moab. It was a disaster!
						While there, the man, Elimelech, died as well as his two songs,
						Mahlon and Kilion. His wife Naomi decided to go back to Bethlehem.
						Ruth, one of her daughters-in-law, said, “I’m going with you.
						Wherever you live, I will live. Your people will be my people. Your
						God is now my God.”
					</p>
					<br />
					<div id="story-anchor" />
					<p>
						So they went back and established their home in Bethlehem.
						Fortunately, poor people were allowed to go into the fields and pick
						up grain dropped during the harvest. So Ruth went to a field owned
						by a man named Boaz. He saw Ruth and found out who she was. He said
						to her, “Don’t go to any other field. The men here won’t hurt you.
						We’ve heard how well you’ve treated Naomi. May the Lord richly bless
						you.”
					</p>
					<br />
					<p>
						That evening, Ruth tells Naomi about the kindness of Boaz. When she
						heard that name, she said, “Oh, Ruth, he’s a close relative of our
						family. Stay in his field, just as he said. You’ll be safe there.”
						So Ruth continue to work in the field of Boaz throughout the barley
						harvest and the wheat harvest.
					</p>
					<br />
					<p>
						At the end of the harvest, Naomi said to Ruth, “When Boaz and his
						men are done working at the threshing floor, they’ll sleep there to
						protect the grain. Go there and do as I say, but don’t let the men
						see you.” So Ruth went to the threshing floor. Once the men were
						asleep, she quietly uncovered the feet of Boaz and lay down. During
						the night, he realized there was a woman lying at his feet. He said,
						“Who are you?” She said, “I’m Ruth. I’m seeking your protection
						because you’re my closest relative.”
					</p>
					<br />
					<p>
						He said, “The Lord bless you! You are a woman of integrity. Still,
						there’s a next-of-kin who is closer than I. In the morning, I’ll
						talk to him and give him an opportunity to redeem you. If he
						doesn’t, I will.”
					</p>
					<br />
					<p>
						The next day, Boaz met with the next-of-kin and the elders of the
						city. He said, “Naomi is selling her husband’s land. You can buy it,
						but if you do, you must also marry Ruth, the Moabite woman.” The man
						said, “You have my permission to buy the property.” The elders were
						witness to this transaction. So Boaz took Ruth as his wife, and they
						became the ancestors of David, the great king of Israel!
					</p>
					<br />
					<button>
						 <p onClick={this.openBibleStory} >Biblical Story</p>
					</button>
				</div>
			</div>
		)
	}
}
