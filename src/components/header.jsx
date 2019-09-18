import React, { Component } from 'react';
import logo from '../assets/logo.png';

class Header extends Component {
	render() {
		return (
			<header>
				<div className="container textCenter">
					<a href="./dashboard">
						<img src={ logo } alt="Star Wars" />
					</a>
				</div>
			</header>
		)
	}
}

export default Header;