import React, { Component } from 'react'

export default class WorldPremiere extends Component {
    openMap() {
        window.open('https://goo.gl/maps/FzQxfbTKDS92')
    }

    openDonate() {
        window.open('http://www.mortonfinearts.org/ruth-musical-donate')
    }
    render() {
        return (
            <div className="section" id="shows">
                <div className="section-content">
                    <h2 id="world-premiere-title">Next Shows</h2>
                    <hr />
                    <h3>
                        Friday, September 7 - 7:00pm - Five Points in Washington
                    <button onClick={() => window.open('https://kapuafrica.midwestfoodbank.org/calendar/event/ruth-the-musical')}>Buy Tickets</button>
                    </h3>
					<br/>
                    <h3>
                        Sunday, September 9 - 3:00pm - Five Points in Washington
                    <button onClick={() => window.open('https://kapuafrica.midwestfoodbank.org/calendar/event/ruth-the-musical')}>Buy Tickets</button>
                    </h3>
                    <br />
                    <p />
                </div>
            </div>
        )
    }
}
