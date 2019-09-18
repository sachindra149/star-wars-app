import React, { Component } from 'react';
import Loading from './loading.jsx';
import '../scss/planets.scss';

import { getPlanets } from '../actions/index.jsx';
import { connect } from 'react-redux';

class AppDashboard extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			planets: ''
		}
	}

	componentDidMount() {
		if(localStorage.getItem("isLoggedIn")) {
			this.props.getListOfPlanets();
		} else {
			this.props.history.push('/');
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			planets: nextProps.planets.data
		});
	}

	logout() {
		localStorage.setItem('isLoggedIn', false);
		this.props.history.push('/');
	}

	render() {
		let population = this.state.planets && this.state.planets.length > 0 ? this.state.planets.map((item) => parseInt(item.population)) : '';
		let populationArr = population && population.length > 0 ? population.filter( (item) => !isNaN(parseInt(item)) ) : '';
		let total = populationArr.length > 0 ? populationArr.reduce((a, b) => a+b) : '';
		
		return (
			<section>
				<div className="container dashboard">
					<ul className="textCenter">
						{
							this.state.planets.length > 0 ? (this.state.planets.map((item) => {
								let blockHeight = (item.population/total)*50000 < 200 ? 200 : (item.population/total)*50000;
								let styleObj = { "height" : blockHeight + 'px' };
								
								return <li key={ item.name } className="planetNames"><a href={`/planet-details-${item.name}`}>
									<div className="planetDetailsBanner" style={ styleObj }>&nbsp;</div>{ item.name }<span>Population: { item.population }</span>
								</a></li>;
							})) : (<li className="loading"><Loading /></li>)
						}
					</ul>
				</div>
				<a href="/" onClick={ () => this.logout() } className="logout">Logout</a>
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