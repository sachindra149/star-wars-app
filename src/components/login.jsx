import React, { Component } from 'react';
import Loading from './loading.jsx';
import Error from './error.jsx';

import { connect } from 'react-redux';
import { getPerson } from '../actions/index.jsx';
import '../scss/style.scss';
import '../scss/login.scss';

class LoginBlock extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			pwd: '',
			error: '',
			userDetails: ''
		}
	}

	updateUserName(e) {
		this.setState({
			username: e.target.value
		});
	}

	updatePwd(e) {
		this.setState({
			pwd: e.target.value
		});
	}

	componentDidMount() {
		if(localStorage.getItem('isLoggedIn') && localStorage.getItem('isLoggedIn') === 'true') {
			this.props.history.push('/dashboard');
		}
	}

	componentWillReceiveProps(nextProps) {

		let filteredObj = nextProps.people.filter(item => item.name.indexOf(this.state.username) > -1);
		let userObj = filteredObj.filter((item) => item.name === this.state.username);
		this.setState({
			userDetails: userObj
		}, () => {
			if(this.state.userDetails.length > 0 && this.state.pwd === this.state.userDetails[0].birth_year) {

				localStorage.setItem('isLoggedIn', true);
				this.props.history.push('/dashboard');
			} else {
				localStorage.setItem('isLoggedIn', false);
				this.setState({
					error: 'Entered Password Is Wrong.'
				});
			}
		});
		if(this.state.userDetails.length == 0) {
			localStorage.setItem('isLoggedIn', false);
			this.setState({
				error: 'No Such Username Exists'
			});
		} else {
			this.setState({
				error: ''
			});
		}
	}

	searchUserDetails(e) {
		if(this.state.username !== '') {
			this.props.loadPersonData(this.state.username.split(" ")[0]);
		} else {
			localStorage.setItem('isLoggedIn', false);
			this.setState({
				error: 'The Username cannot be blank.'
			});
		}
	}

	render() {
		return (
			<section className="loginBlock">
				<div className="loginBlockMain relativePosition">
					{
						this.state.error.length > 0 ? (<Error errorMsg={ this.state.error } />) : ''
					}
					<h3 className="fullWidth">Login to Star War App</h3>
					<div className="form">
						<div className="fullWidth">
							<label htmlFor="username">Username</label>
							<input type="text" name="username" id="username" onBlur={ (e) => this.updateUserName(e) } />
						</div>
						<div className="fullWidth">
							<label htmlFor="pwd">Password</label>
							<input type="password" name="pwd" id="pwd" onBlur={ (e) => this.updatePwd(e) } />
						</div>
						<div className="fullWidth">
							<button onClick={ (e) => this.searchUserDetails(e) }>
								<span></span>
								Submit
							</button>
						</div>
					</div>
				</div>
				{
					this.state.userDetails && this.state.userDetails.length === 0 && this.state.error.length === 0 ? (<div className="loading"><Loading /></div>) : ''
				}
			</section>
		)
	}
}

const mapStateToProps = state => {
	return {
		people: state.data
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadPersonData: (id) => {
			dispatch(getPerson(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginBlock);