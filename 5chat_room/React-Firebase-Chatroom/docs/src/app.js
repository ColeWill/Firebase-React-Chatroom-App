import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ChatRoom from './Components/ChatRoom'
import Navbar from './Components/Navbar'

class App extends Component {

	render() {
		return (
				<div>
					<Navbar />
					This is the React App!

					<ChatRoom />
				</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))