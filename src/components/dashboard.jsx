import React, { Component } from 'react';
import { getPlanets } from '../actions/index.jsx';

import { connect } from 'react-redux';

class AppDashboard extends Component {
	
	componentDidMount() {
		this.props.getListOfPlanets();
	}

	render() {
		console.log("this.props1: ", this.props);
		return (
			<section>
				<div className="container">
					<ul>
						{
							// this.props.planets && this.props.planets.data.results && this.props.planets.data.results.length > 0 ? (<li>{ this.props.planets.data.results }</li>) : ('')
						}
					</ul>
				</div>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		planets: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getListOfPlanets: () => {
			dispatch(getPlanets());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppDashboard);