import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginBlock from './login.jsx';
import AppDashboard from './dashboard.jsx';
import PlanetDetails from './planetDetails.jsx';
import NotFound from './notFound.jsx';

class AppComponents extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={LoginBlock} />
					<Route path="/dashboard" component={AppDashboard} />
					<Route path="/planet-details-:name" component={ (props) => <PlanetDetails { ...props } /> } />
					<Route path="/*" component={NotFound} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default AppComponents;