import React, { Component } from 'react';

class Error extends Component {
	render() {
		return (
			<div className="errorBlock">
				<p>{ this.props.errorMsg }</p>
			</div>
		)
	}
}

export default Error;