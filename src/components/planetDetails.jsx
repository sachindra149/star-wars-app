import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPlanetsDetails } from '../actions/index.jsx';

import '../scss/style.scss';

class PlanetDetails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			planetDetails: ''
		}
	}

	componentDidMount() {
		this.props.selectedPlanetsDetails(this.props.match.params.name);
	}

	componentWillReceiveProps(nextProps) {
		console.log("nextProps: ", nextProps);
		this.setState({
			planetDetails: nextProps.planetDetails[0]
		});
	}

	logout() {
		localStorage.setItem('isLoggedIn', false);
		this.props.history.push('/');
	}

	render() {
		return (
			<section className="planetDetails">
				{/* <div className="planetDetailsBanner">&nbsp;</div> */}
				<div className="fullWidth">
					<div className="container">
						<div className="planetHeading">
							<a href="/dashboard">Return to Planets Listing</a>
						</div>
						<div className="planetContent">
							<table width="100%" border="0" cellSpacing="0" cellPadding="0">
								<thead>
									<tr>
										<th colSpan="2">Name of the Planet: <b>{ this.state.planetDetails.name }</b></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td colSpan="2">Created on: <b>{ this.state.planetDetails.created }</b></td>
									</tr>
									<tr>
										<td colSpan="2">Edited on: <b>{ this.state.planetDetails.edited }</b></td>
									</tr>
									<tr>
										<td>Climate: <b>{ this.state.planetDetails.climate }</b></td>
										<td>Gravity: <b>{ this.state.planetDetails.gravity }</b></td>
									</tr>
									<tr>
										<td>Orbital Period: <b>{ this.state.planetDetails.orbital_period }</b></td>
										<td>Rotation Period: <b>{ this.state.planetDetails.rotation_period }</b></td>
									</tr>
									<tr>
										<td>Diameter: <b>{ this.state.planetDetails.diameter }</b></td>
										<td>Surface Water: <b>{ this.state.planetDetails.surface_water }</b></td>
									</tr>
									<tr>
										<td>Population: <b>{ this.state.planetDetails.population }</b></td>
										<td>Terrain: <b>{ this.state.planetDetails.terrain }</b></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<a href="/" onClick={ () => this.logout() } className="logout">Logout</a>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		planetDetails: state.data
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		selectedPlanetsDetails: (name) => {
			dispatch(getPlanetsDetails(name))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetDetails);