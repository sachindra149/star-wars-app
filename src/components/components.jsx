import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginBlock from './login.jsx';
import AppDashboard from './dashboard.jsx';
import NotFound from './notFound.jsx';

class AppComponents extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={LoginBlock} />
					<Route path="/dashboard" component={AppDashboard} />
					<Route path="/*" component={NotFound} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default AppComponents;